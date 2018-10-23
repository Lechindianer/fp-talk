import {AccountService} from './accountservice';
import {MoneyStorage} from './moneystorage';

class BankAccount2 {
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
    for (let i = 0; i < amount.length; i++) {
      this.money = this.money - amount[i];
    }
  }

  public deposit(amount: number[]): void {
    for (let i = 0; i < amount.length; i++) {
      this.money = this.money + amount[i];
    }
  }
}
