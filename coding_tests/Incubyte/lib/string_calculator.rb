# frozen_string_literal: true

class StringCalculator

  def self.add(numbers)
    return 0 if numbers.empty?

    delimiter = parse_delimiter(numbers)
    numbers = parse_number_string(numbers)
    parsed_numbers = numbers.split(delimiter).map(&:to_i)

    negative_numbers = parsed_numbers.select(&:negative?)
    raise ArgumentError, "negative numbers not allowed #{negative_numbers.join(', ')}" unless negative_numbers.empty?

    if delimiter.match?("\*")
      product = 1
      parsed_numbers.each do |num|
        product = num * product
      end
      product
    else
      parsed_numbers.sum { |num| num > 1000 ? 0 : num }
    end
  end

  def self.parse_number_string(numbers_str)
    return numbers_str unless numbers_str.start_with?('//')

    numbers_str.split("\n", 2)[1]
  end

  def self.parse_delimiter(numbers_str)
    default_delimiter = /,|\n/
    return default_delimiter unless numbers_str.start_with?('//')

    delimiter_str = numbers_str.split("\n", 2).first[2..]

    if delimiter_str.start_with?('[') && delimiter_str.end_with?(']')
      Regexp.new(Regexp.escape(delimiter_str[1..-2])) # gets from 1st index to 2nd last index
    else
      Regexp.new(Regexp.escape(delimiter_str))
    end
  end
end