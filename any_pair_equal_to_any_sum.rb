# Given an unsorted array of integers, write a function that will return true if any pair in the array sums to 100.

# SOLUTIONS: 
# 1. Take array and run loop two times and in the second loop add if condition whether arr[i] + arr[j] == sum

# 2. Sort the Given array and search the number such that : searchNumber = sum - arr[i] : nlog(n), we can also use binary search

#1:
sum = 100

arr= [10, 20, 30, 90, 21]


def search_number num, low, high
puts  "#{num} , #{low}, #{high}"
end
arr.each do |num|
    search_number( sum - num, 0, arr.length())
end