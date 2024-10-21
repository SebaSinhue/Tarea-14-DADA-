function elemetosDuplicados(nums){
    if (nums.length === 0) {
        return 0;
    }

    let k = 1;
    let index = 1;

    for (let index = 1; index < nums.length; i++){
        if (nums[i] !== nums[i - 1]) {
            nums[index] = nums[i];
            index++;
            k++;
        }
    }

    return k;
}