import {AccountService} from './accountservice';
import {MoneyStorage} from './moneystorage';

class BankAccount5 {
  private money: number;

  constructor(
      private accountId: number,
      private moneyStorage: MoneyStorage,
      private accountService: AccountService,
  ) {
    const account = this.accountService.getAccount(accountId);
    const currentMoney = this.moneyStorage.loadForAccount(account);
    this.money = currentMoney;
  }

  public withdraw(currentMoney: number, amount: number[]): void {
    this.money = amount.reduce(
        (accumulator, currentValue) => accumulator - currentValue,
        currentMoney);
  }

  public deposit(currentMoney: number, amount: number[]): void {
    this.money = amount.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        currentMoney);
  }
}
