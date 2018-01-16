import retryIt from './retryIt';
import testAlt from './testAlt';

retryIt('tests alt 9', () => testAlt('iota'));
