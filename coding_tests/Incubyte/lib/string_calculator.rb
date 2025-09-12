# frozen_string_literal: true

class StringCalculator

  def self.add(numbers)
    return 0 if numbers.empty?

    default_delimiter = /,|\n/
    if numbers.start_with?('//')
      delimiter_str, numbers = numbers.split("\n", 2)
      delimiter = Regexp.new(Regexp.escape(delimiter_str[2]))
    else
      delimiter = default_delimiter
    end

    numbers.split(delimiter).map(&:to_i).sum
  end
end
