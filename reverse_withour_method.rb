def reverse_str str
  len = str.length
  (0..(len/2)).each_with_index do |i, num|
    temp = str[i]
    str[i] = str[len-1-i]
    str[len-1-i] = temp
  end
  str
end
