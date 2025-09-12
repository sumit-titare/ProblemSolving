import java.util.Scanner;

public class Factorial {

    public int calculateFactorial(int num){
        int fact = 1;
        for(int i=2; i<=num; i++){
            fact = fact * i;
        }

        return fact;
    }

    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number");
        int num = sc.nextInt();

        Factorial fact = new Factorial();

        System.out.println("Answer is " + fact.calculateFactorial(num));
        sc.close();
    }
}
