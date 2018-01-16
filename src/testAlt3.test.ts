import retryIt from './retryIt';
import testAlt from './testAlt';

retryIt('tests alt 3', () => testAlt('bitcoin-cash'));
