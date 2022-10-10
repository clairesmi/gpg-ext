<script setup>
import { reactive, ref } from "vue";
import { binarySearch } from "./binarySearch";
import LoadingView from "./LoadingView.vue";
import PayGapChart from "./PayGapChart.vue";
import PayQuarters from "./PayQuarters.vue";

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
      function: findTitleInTab,
    },
    (injectionResults) => {
      // console.log(injectionResults, 'ir')
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
  // return headers.map((h) => {
  //   if (h.title) {
  //     title = h.title;
  //     return title;
  //   } else {
  //     throw new Error("Page title not found");
  //   }
  // });
  const titleAttr = headers.find((h) => h.title).title;
  if (titleAttr) {
    return titleAttr;
  } else {
    throw new Error("Page title not found");
  }
};

const fetchData = async () => {
  try {
    const res = await fetch("http://localhost:105/getgpgdata/", {
      // AWS LOCATION FOR PRODUCTION
      // const res = await fetch("https://cs--1.s3.eu-west-2.amazonaws.com/gpg_data.json", {
      method: "get",
      headers: {
        "content-type": "application/json",
      },
    });
    companyData = await res.json();
    // console.log(companyData.map(c => c.CurrentName))
    findCurrentCompany();
    loading.value = false;
  } catch (e) {
    throw new Error(e.message);
  }
};

const findCurrentCompany = () => {
  console.log(title.value);
  if (title.value) {
    currentCompany.value = binarySearch(
      companyData,
      title.value,
      0,
      companyData.length - 1
    );
    loading.value = false;
  }
};

setupExt();
fetchData();
</script>


<template>
  <div class="main">
    <loading-view class="loading-view" v-if="loading" />
    <div v-else-if="currentCompany && currentCompany['CurrentName']" class="content">
      <header class="header">
        <h1>{{ currentCompany["CurrentName"] }}</h1>
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
        <pay-quarters />
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
  /* height: 5%; */
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
