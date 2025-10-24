=begin
You're working with an intern that keeps coming to you with JavaScript code that won't run because the braces, brackets,
and parentheses are off. To save you both some time, you decide to write a braces/brackets/parentheses validator.
Let's say:

'(', '{', '[' are called "openers."

')', '}', ']' are called "closers."

Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.

Examples:

"{ [ ] ( ) }" should return True

"{ [ ( ] ) }" should return False

"{ [ }" should return False

=end

input = "{ [ ] ( ) }" 

def validate_brackets?(str)
  stack = []
  str.each_char do |c|
    case c
    when '{', '[', '('
      stack.push(c)
    when '}'
      num = stack.pop 
      return false if num != '{'
    when ']'
      num = stack.pop 
      return false if num != '['
    when ')'
      num = stack.pop 
      return false if num != '('
    end
  end
  stack.count > 0
end
