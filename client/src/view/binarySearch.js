import Fuse from 'fuse.js'

const fuseOpts = {
    includeScore: true,
    includeMatches: true,
    threshold: 0.3,
    useExtendedSearch: true,
    fieldNormWeight: 0
}


export const binarySearch = (arr, title, start, end) => {
    // Base Condition
    if (start > end) {
        // console.log('RETURNING', start, end)
        return false;
    }

    // Find the middle index
    let mid = Math.floor((start + end) / 2);

    // Compare mid with given key 
    // if (arr[mid]["CurrentName"].toUpperCase().includes(title) || title.includes(arr[mid]["CurrentName"].toUpperCase())) { // zizzi should be title - use includes both ways
    //     console.log(arr[mid], 'arr mid')
    //     return arr[mid];
    // }
    const fuse = new Fuse([arr[mid]["CurrentName"].toUpperCase()], fuseOpts)
    const result = fuse.search(title)
    if (result.length || arr[mid]["CurrentName"].toUpperCase().includes(title) || title.includes(arr[mid]["CurrentName"].toUpperCase())) {
        return arr[mid]
    }


    // If element at mid is greater than x,
    // search in the left half of mid
    if (arr[mid]["CurrentName"].toUpperCase() > title) {
        return binarySearch(arr, title, start, mid - 1);
    } else {

        // If element at mid is smaller than x,
        // search in the right half of mid
        return binarySearch(arr, title, mid + 1, end);
    }
}
