# Write a program to print out a grid of 10 x 10 multiplication table

#1 st solution:

for i in 1..10 do 
    for j in 1..10 do
        print i * j
    end
end

#2 
for i in 1..10 do 
    for j in 1..10 do
        print "#{i * j}" + " "
    end
  puts
end

#3 
for i in 1..10 do 
  for j in 1..10 do
    print "#{i * j}".to_s.rjust(2, "0") + " "
  end
puts
end