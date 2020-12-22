function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    function emptyArrayToZero(array) {
      if (Array.isArray(array) && !(array.length > 0)) {
        array = [0];
        return array;
      } else return array;
    }
    const reducer = (sum, curr) => sum + curr;
    return (
      (nums1.reduce(reducer) + nums2.reduce(reducer)) /
      (nums1.length + nums2.length)
    );
  }


const nums1 = [0,0], nums2 = [0,0];


console.log(findMedianSortedArrays(nums1,nums2));