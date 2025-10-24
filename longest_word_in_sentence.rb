def longest_word sentence
  sentence_array = sentence.split(" ") #convert a string into an array
  sorted_array_by_length = sentence_array.sort_by{|a| -1* a.length} # multiply by -1 to get DESCENDING ORDER
  sorted_array_by_length[0]
end
