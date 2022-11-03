def count_vowels(string)
    vowels = 0
    counter = 0
    while counter < string.length do
      if string[counter]=="a" || string[counter]=="e" || string[counter]=="i" || string[counter]=="o" || string[counter]=="u"
        vowels += 1
      end
      counter += 1
    end
    return vowels
endcount_vowels("La la Land i like a lot")
#output would be
#=> 8
