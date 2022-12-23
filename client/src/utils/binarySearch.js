import Fuse from 'fuse.js'

const fuseOpts = {
    includeScore: true,
    includeMatches: true,
    threshold: 0.3,
    useExtendedSearch: true,
    fieldNormWeight: 2
}


// current workaround for revolut which returns the wrong company with the standard functionality
const EXCEPTIONS = [
    'REVOLUT',
    'EUROPCAR',
    'LUSH',
]

const capitalise = str => {
    return str.toUpperCase()
}


let bestMatch
export const binarySearch = (arr, title, start, end) => {
    
    // const cleansedTitle = title.startsWith('THE') ? title.slice(4) : title
    // Base Condition
    if (start > end) {
        return bestMatch
    }
    
    // Find the middle index
    let mid = Math.floor((start + end)/2)
    
    let currentName
    // let employerName
    
    if (arr[mid]['CurrentName']) currentName = capitalise(arr[mid]['CurrentName'])
    // if (arr[mid]['EmployerName']) employerName = capitalise(arr[mid]['EmployerName'])
    
    const fuse = new Fuse([currentName], fuseOpts)

    if (EXCEPTIONS.includes(title)) {
        if (currentName.includes(title + ' ') || title.includes(currentName + ' ')) {
            return arr[mid]
        }
    } else {
        const result = fuse.search(`${title}`)
        if (result.length || currentName.includes(title) || title.includes(currentName)) {
            bestMatch = arr[mid]
            // return arr[mid] 
        }
    }

    if (currentName > title) {
        return binarySearch(arr, title, start, mid - 1);
    } else {

        // If element at mid is smaller than x,
        // search in the right half of mid
        return binarySearch(arr, title, mid + 1, end);
    }
}

