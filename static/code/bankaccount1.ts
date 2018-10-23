import {AccountService} from './accountservice';
import {MoneyStorage} from './moneystorage';

class BankAccount1 {
  private money: number;

  constructor(private accountId: number) {
    const accountService = new AccountService();
    const moneyStorage = new MoneyStorage();

    const account = accountService.getAccount(accountId);
    const currentMoney = moneyStorage.loadForAccount(account);

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