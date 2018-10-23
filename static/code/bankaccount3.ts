import {AccountService} from './accountservice';
import {MoneyStorage} from './moneystorage';

class BankAccount3 {
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
    amount.forEach(x => this.money = this.money - x);
  }

  public deposit(amount: number[]): void {
    amount.forEach(x => this.money = this.money + x);
  }
}
