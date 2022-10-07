import Fuse from 'fuse.js'

const fuseOpts = {
    includeScore: true,
    includeMatches: true,
    threshold: 0.3,
    useExtendedSearch: true,
    fieldNormWeight: 0.2
}


// current workaround for revolut which returns the wrong company with the standard functionality
const EXCEPTIONS = [
    'REVOLUT'
]

// the guardian, metro bank, missguided, ryanair, net a porter

const capitalise = str => {
    return str.toUpperCase()
}


export const binarySearch = (arr, title, start, end) => {
    // console.log('runn')
    // Base Condition
    if (start > end) {
        return
    }

    // Find the middle index
    let mid = Math.floor((start + end) / 2);

    let currentName
    
    if (arr[mid]['CurrentName']) currentName = capitalise(arr[mid]['CurrentName'])
    // console.log(currentName)

    // Compare mid with given key 
    // if (arr[mid]["CurrentName"].toUpperCase().includes(title) || title.includes(arr[mid]["CurrentName"].toUpperCase())) { // zizzi should be title - use includes both ways
    //     console.log(arr[mid], 'arr mid')
    //     return arr[mid];
    // }

    if (EXCEPTIONS.includes(title)) {
        if (currentName.includes(title + ' ') || title.includes(currentName + ' ')) {
            return arr[mid]
        }
    } else {
        const fuse = new Fuse([currentName], fuseOpts)
        // const fuse = new Fuse(title, fuseOpts)
        // includes option for fuse.js
        const result = fuse.search(`'${title}`)
        if (result.length || currentName.includes(title) || title.includes(currentName)) {
            // console.log(arr[mid])
            return arr[mid]
        }
    }





    // If element at mid is greater than x,
    // search in the left half of mid

    if (currentName > title) {
        // if (currentName > title) {
        return binarySearch(arr, title, start, mid - 1);
    } else {

        // If element at mid is smaller than x,
        // search in the right half of mid
        return binarySearch(arr, title, mid + 1, end);
    }
}

