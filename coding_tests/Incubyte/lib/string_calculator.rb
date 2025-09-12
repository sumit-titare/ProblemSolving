# frozen_string_literal: true

class StringCalculator

  def self.add(numbers)
    return 0 if numbers.empty?

    delimiter = parse_delimiter(numbers)
    numbers = parse_number_string(numbers)

    numbers.split(delimiter).map(&:to_i).sum
  end

  def self.parse_number_string(numbers_str)
    return numbers_str unless numbers_str.start_with?('//')

    numbers_str.split("\n", 2)[1]
  end

  def self.parse_delimiter(numbers_str)
    default_delimiter = /,|\n/
    return default_delimiter unless numbers_str.start_with?('//')

    Regexp.new(Regexp.escape(numbers_str[2]))
  end
end
