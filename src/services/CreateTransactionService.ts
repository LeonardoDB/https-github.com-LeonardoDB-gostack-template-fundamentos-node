import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, type, value }: Request): Transaction {

    if (value <= 0) {
      throw Error('Negative value is not allowed');
    }


    const transaction = this.transactionsRepository.create({
      title, type, value
    });

    return transaction;
  }
}

export default CreateTransactionService;
