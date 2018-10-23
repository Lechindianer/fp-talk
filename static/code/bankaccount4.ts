import {AccountService} from './accountservice';
import {MoneyStorage} from './moneystorage';

class BankAccount4 {
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

  public withdraw(amount: number[]): void {
    this.money = amount.reduce(
        (accumulator, currentValue) => accumulator - currentValue, this.money);
  }

  public deposit(amount: number[]): void {
    this.money = amount.reduce(
        (accumulator, currentValue) => accumulator + currentValue, this.money);
  }
}
