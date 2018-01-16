import retryIt from './retryIt';
import testAlt from './testAlt';

retryIt('tests alt 5', () => testAlt('litecoin'));
