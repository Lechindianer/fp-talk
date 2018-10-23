import {AccountService} from './accountservice';
import {MoneyStorage} from './moneystorage';

class BankAccount6 {
  public static withdraw(currentMoney: number, amount: number[]): number {
    return amount.reduce(
        (accumulator, currentValue) => accumulator - currentValue,
        currentMoney);
  }

  public static deposit(currentMoney: number, amount: number[]): number {
    return amount.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        currentMoney);
  }
}

const accountService = new AccountService();
const moneyStorage = new MoneyStorage();

const accountId = 666;
const account = accountService.getAccount(accountId);
const currentMoney = moneyStorage.loadForAccount(account);

BankAccount6.withdraw(currentMoney, [1, 2, 3]);
BankAccount6.deposit(currentMoney, [1, 2, 3]);
