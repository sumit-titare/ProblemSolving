import java.util.Scanner;

public class Palindrome {
    
    public boolean isPalindrome(int num) {
      int temp = num;
      int reverse = 0;

      while(temp > 0){
        int dp = temp % 10;
        reverse = reverse*10 + dp;
        temp = temp/10;
      }

      return (reverse == num);
    }
    
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        Palindrome palindromeCheck = new Palindrome();

        System.out.println("Enter number to check ");
        int num = sc.nextInt();

        System.out.println("Number is " + (palindromeCheck.isPalindrome(num) ?  "palindrome" : "not palindrome"));
        sc.close();
    }
}