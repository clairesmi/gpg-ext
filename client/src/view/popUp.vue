<script setup>
import { reactive, ref, onMounted, onBeforeMount } from "vue";
import { binarySearch } from "../utils/binarySearch";
import LoadingView from "../components/LoadingView.vue";
import PayGapChart from "../components/PayGapChart.vue";
import PayQuarters from "../components/PayQuarters.vue";
import ChartLegend from "../components/ChartLegend.vue";

// create the tab variable for script execution in the active tab
let title = ref("");
let companyData = reactive([]);

let currentCompany = ref({});
let loading = ref(true);

const setupExt = async () => {
  let [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });

  if (!tab.url.includes("linkedin.com/company/")) {
    return;
  }
  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id },
      func: findTitleInTab,
    },
    (injectionResults) => {
      const res = injectionResults[0].result;
      parseResult(res);
    }
  );
};

const parseResult = (str) => {
  title.value = str.toUpperCase();
};

// The body of this function will be executed as a content script inside the
// current page
const findTitleInTab = () => {
  let headers = document.querySelectorAll("h1");
  headers = Array.from(headers);
  const titleAttr = headers.find((h) => h.innerText).innerText;
  if (titleAttr) {
    return titleAttr;
  } else {
    throw new Error("Page title not found");
  }
};

const fetchData = async () => {
  try {
    // const res = await fetch("http://localhost:105/getgpgdata/", {
    // AWS LOCATION FOR PRODUCTION
    const res = await fetch(
      "https://cs--1.s3.eu-west-2.amazonaws.com/gpg_data.json",
      {
        method: "get",
        headers: {
          "content-type": "application/json",
        },
      }
    );
    companyData = await res.json();
    findCurrentCompany();
    loading.value = false;
  } catch (e) {
    throw new Error(e.message);
  }
};

const findCurrentCompany = () => {
  if (title.value) {
    currentCompany.value = binarySearch(
      companyData,
      title.value,
      0,
      companyData.length - 1
    );
  }
};

onBeforeMount(() => {
  setupExt();
});

onMounted(() => {
  fetchData();
});
</script>

<template>
  <div class="main">
    <loading-view class="loading-view" v-if="loading" />
    <div
      v-else-if="currentCompany && currentCompany['CurrentName']"
      class="content"
    >
      <header class="header">
        <h1 class="header-text">{{ currentCompany["CurrentName"] }}</h1>
        <chart-legend />
      </header>
      <section class="section">
        <pay-gap-chart
          v-if="typeof currentCompany['DiffMedianHourlyPercent'] === 'number'"
          class="hpg"
          label="hourly"
          :diffMedianPercent="currentCompany['DiffMedianHourlyPercent']"
          :diffMeanPercent="currentCompany['DiffMeanHourlyPercent']"
        />
        <pay-gap-chart
          v-if="typeof currentCompany['DiffMedianBonusPercent'] === 'number'"
          class="bpg"
          label="bonus"
          :diffMedianPercent="currentCompany['DiffMedianBonusPercent']"
          :diffMeanPercent="currentCompany['DiffMeanBonusPercent']"
          :maleBonusPercent="currentCompany['MaleBonusPercent']"
          :femaleBonusPercent="currentCompany['FemaleBonusPercent']"
        />
        <pay-quarters
          v-if="
            currentCompany['FemaleLowerQuartile'] &&
            currentCompany['MaleLowerQuartile']
          "
          :femaleLowerQuartile="currentCompany['FemaleLowerQuartile']"
          :maleLowerQuartile="currentCompany['MaleLowerQuartile']"
          :femaleLowerMiddleQuartile="
            currentCompany['FemaleLowerMiddleQuartile']
          "
          :maleLowerMiddleQuartile="currentCompany['MaleLowerMiddleQuartile']"
          :femaleUpperMiddleQuartile="
            currentCompany['FemaleUpperMiddleQuartile']
          "
          :maleUpperMiddleQuartile="currentCompany['MaleUpperMiddleQuartile']"
          :femaleTopQuartile="currentCompany['FemaleTopQuartile']"
          :maleTopQuartile="currentCompany['MaleTopQuartile']"
        />
      </section>
    </div>
    <div v-else>Gender pay gap data not available here</div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}

.main {
  height: fit-content;
  width: 500px;
}

.loading-view,
.content {
  height: 100%;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0 0 0;
}

.header-text {
  margin: 0;
}

.section {
  height: 100%;
  /* overflow-y: scroll; */
}

.hpg,
.bpg {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 250px;
}
</style>
