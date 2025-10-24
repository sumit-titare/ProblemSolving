# def convert_to_binary(integer)
#   return integer.to_s if integer <= 1
#   binary = []
#   while integer > 0
#     binary << integer % 2
#     integer /= 2
#   end
#   binary.reverse.join
# end
def convert int
  return int.to_s if int<=1
  binary = []
  while(int>0)
    binary << int%2
    int = int/2
  end
  binary.reverse.join #to join all elements of array
end
