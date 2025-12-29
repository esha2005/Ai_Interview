export const TEST_SETS = {
  Aptitude: [
    { q: 'If x=3, y=2, evaluate 2x + 3y', options: ['12','13','11','10'], a: 0 },
    { q: '60% of 250 is', options: ['125','150','100','130'], a: 1 },
    { q: 'Simplify: 9/3 + 4', options: ['7','6','5','8'], a: 0 },
    { q: 'Average of 4, 8, 12', options: ['6','8','10','9'], a: 1 },
    { q: 'Time: Speed 50km/h, distance 150km, time?', options: ['2h','3h','4h','2.5h'], a: 1 },
  ],
  HR: [
    { q: 'Best way to discuss weaknesses?', options: ['Avoid them','Blame others','Choose real but improvable','Say none'], a: 2 },
    { q: 'Team conflict approach?', options: ['Ignore','Collaborate and resolve','Dominate','Delay'], a: 1 },
    { q: 'Good answer to “Tell me about yourself”?', options: ['Life story','Relevant experience','Jokes','Personal secrets'], a: 1 },
    { q: 'Salary question mid-interview?', options: ['Lead with salary','Ask company first','Never discuss','Consider role and range'], a: 3 },
    { q: 'Handling failure?', options: ['Hide it','Learn and adapt','Quit','Blame team'], a: 1 },
  ],
  Technical: [
    { q: 'Time complexity of binary search?', options: ['O(n)','O(log n)','O(n log n)','O(1)'], a: 1 },
    { q: 'HTTP status for Created?', options: ['200','201','202','204'], a: 1 },
    { q: 'DB normalization reduces', options: ['Indexes','Redundancy','Constraints','Joins'], a: 1 },
    { q: 'JS const allows', options: ['Reassign variable','Mutate object','No mutation','Hoisting to top'], a: 1 },
    { q: 'React key purpose', options: ['Styling','Identify list items','State management','Routing'], a: 1 },
  ],
}

export function tipsFor(type, score) {
  if (type === 'Aptitude') return score < 4 ? 'Practice arithmetic and percentage problems.' : 'Good speed and accuracy.'
  if (type === 'HR') return score < 4 ? 'Structure answers with STAR method.' : 'Clear and concise responses.'
  if (type === 'Technical') return score < 4 ? 'Revisit DS/Algo and web basics.' : 'Solid fundamentals.'
  return 'Keep practicing consistently.'
}

export const COMPANY_TESTS = {
  Google: {
    DSA: [
      { q: 'Find two numbers sum to target in array.', options: ['Hash map','Two pointers','Brute force','Sort then scan'], a: 0 },
      { q: 'Detect cycle in linked list.', options: ['DFS','Fast/slow pointers','Stack','Sort'], a: 1 },
      { q: 'Topological sort use case.', options: ['Trees','DAG','Graphs with cycles','Arrays'], a: 1 },
      { q: 'Longest substring without repeat complexity.', options: ['O(n^2)','O(n)','O(log n)','O(n log n)'], a: 1 },
      { q: 'Binary search insertion index.', options: ['Lower bound','Upper bound','Midpoint','Pivot'], a: 0 },
    ],
    'System Design': [
      { q: 'Scale read-heavy system.', options: ['Sharding','Read replicas','Write queues','Client caching only'], a: 1 },
      { q: 'Cache eviction best for hot keys.', options: ['FIFO','LRU','LFU','Random'], a: 2 },
      { q: 'Ensure at-least-once delivery.', options: ['Idempotent ops','ACK + retry','Batching','Client-side cache'], a: 1 },
      { q: 'Rate limit per-user.', options: ['Token bucket','Round robin','Bloom filter','Skip lists'], a: 0 },
      { q: 'Search autocomplete index.', options: ['Trie','Heap','Queue','Stack'], a: 0 },
    ],
  },
  Amazon: {
    DSA: [
      { q: 'Max subarray sum method.', options: ['Prefix sums','Kadane','Divide and conquer','Greedy'], a: 1 },
      { q: 'Kth largest in stream.', options: ['Queue','Min-heap of size k','Stack','Trie'], a: 1 },
      { q: 'Balanced parentheses check.', options: ['Stack','Queue','Set','Map'], a: 0 },
      { q: 'LRU cache core structure.', options: ['Array','Linked list + hash','Tree','Heap only'], a: 1 },
      { q: 'Shortest path in weighted graph.', options: ['BFS','DFS','Dijkstra','Union-Find'], a: 2 },
    ],
    'Leadership Principles': [
      { q: 'Ownership example should show', options: ['Task avoidance','End-to-end responsibility','Delegation only','Personal credit'], a: 1 },
      { q: 'Customer obsession means', options: ['Ignore feedback','Prioritize user outcomes','Cost only','Internal KPIs only'], a: 1 },
      { q: 'Dive Deep is shown by', options: ['Surface answers','Data-driven analysis','Guessing','Escalation'], a: 1 },
      { q: 'Bias for Action balances', options: ['Speed vs quality','Titles','Budget only','Meetings'], a: 0 },
      { q: 'Insist on High Standards relates to', options: ['Minimal testing','Quality bar','Skip reviews','Ignore defects'], a: 1 },
    ],
  },
  Microsoft: {
    DSA: [
      { q: 'Remove duplicates from sorted array.', options: ['Two pointers','Stack','Queue','Set'], a: 0 },
      { q: 'Binary tree level order uses', options: ['DFS','Queue BFS','Stack','Recursion only'], a: 1 },
      { q: 'Find meeting rooms needed.', options: ['Greedy with sort','DP','Backtracking','Binary search'], a: 0 },
      { q: 'Rotate array by k.', options: ['Reverse segments','Extra array','Stack','Queue'], a: 0 },
      { q: 'Count bits technique.', options: ['DP','Brute force','Trie','Hash'], a: 0 },
    ],
    'Problem Solving': [
      { q: 'Choose data structure for LRU.', options: ['Set','Map + list','Queue','Vector'], a: 1 },
      { q: 'Thread-safety for shared counter.', options: ['No lock','Mutex/atomic','Cache','Proxy'], a: 1 },
      { q: 'Store large files efficiently.', options: ['DB rows','Object storage','CSV','RAM'], a: 1 },
      { q: 'API pagination used for', options: ['Latency','Rate limiting','Large lists','Auth'], a: 2 },
      { q: 'Prevent N+1 in DB.', options: ['Joins','More queries','Indexes only','No ORM'], a: 0 },
    ],
  },
  TCS: {
    Aptitude: [
      { q: 'Profit %: CP 200, SP 240.', options: ['20%','10%','15%','25%'], a: 0 },
      { q: 'Ratio simplify 18:24.', options: ['3:4','2:3','4:5','1:2'], a: 0 },
      { q: 'Time: 60km in 1.5h speed.', options: ['30','45','40','60'], a: 2 },
      { q: 'Average of 5,10,15.', options: ['10','12','15','8'], a: 0 },
      { q: 'Percentage of 80 from 200.', options: ['30%','40%','50%','60%'], a: 1 },
    ],
    'Basic Coding': [
      { q: 'Reverse a string in-place.', options: ['Two pointers','Stack','Queue','Map'], a: 0 },
      { q: 'Check prime efficiently.', options: ['Trial to n','Trial to sqrt(n)','Sieve only','Random'], a: 1 },
      { q: 'Sum of digits approach.', options: ['Loop','Recursion','Map','Queue'], a: 0 },
      { q: 'Fibonacci space-optimal.', options: ['Memo table','Iterative two vars','Matrix expo','Stack'], a: 1 },
      { q: 'Palindrome check.', options: ['Reverse compare','Sort','Set','Trie'], a: 0 },
    ],
  },
  Infosys: {
    Aptitude: [
      { q: 'Simple interest: P=1000,R=10%,T=2.', options: ['100','150','200','250'], a: 2 },
      { q: 'Probability of head in fair coin.', options: ['0.25','0.5','0.75','1'], a: 1 },
      { q: 'Speed-time-distance relation.', options: ['S=D/T','S=T/D','T=S/D','D=T/S'], a: 0 },
      { q: 'LCM of 6 and 8.', options: ['12','16','24','18'], a: 2 },
      { q: 'Median of 3,7,9,12.', options: ['7','9','8','10'], a: 2 },
    ],
    Pseudocode: [
      { q: 'Output of for i=0..3 print i.', options: ['0 1 2 3','1 2 3 4','0 1 3','2 3'], a: 0 },
      { q: 'Array index starts at.', options: ['0','1','2','Depends'], a: 3 },
      { q: 'While loop ends when.', options: ['Condition false','Condition true','Timeout','Input'], a: 0 },
      { q: 'Function to add two numbers.', options: ['I/O','Add and return','Store global','Print'], a: 1 },
      { q: 'Break statement does.', options: ['Continue','Exit loop','Restart','Pause'], a: 1 },
    ],
  },
  Wipro: {
    Aptitude: [
      { q: 'Compound interest increases by.', options: ['Linear','Exponential','Log','Constant'], a: 1 },
      { q: 'Ratio 9:12 equals.', options: ['3:4','2:3','1:2','4:5'], a: 0 },
      { q: 'Work: A 10 days, B 20 days.', options: ['Together 6.67','Together 12','Together 15','Together 30'], a: 0 },
      { q: 'Permutation of ABC.', options: ['3','6','9','12'], a: 1 },
      { q: 'Mean of 2,4,6,8.', options: ['5','4','6','7'], a: 0 },
    ],
    'Basic Coding': [
      { q: 'Find second largest element.', options: ['Sort','One pass tracking','Heap','Map'], a: 1 },
      { q: 'Count vowels in string.', options: ['Regex','Loop check','Stack','Queue'], a: 1 },
      { q: 'Merge two sorted arrays.', options: ['Two pointers','Stack','Queue','Set'], a: 0 },
      { q: 'Sum of array elements.', options: ['Reduce','Map','Filter','Sort'], a: 0 },
      { q: 'Check anagram.', options: ['Sort compare','Hash counts','Length only','Trie'], a: 1 },
    ],
  },
  Meta: {
    DSA: [
      { q: 'Number of islands approach.', options: ['DFS/BFS','Union-Find','DP','Sort'], a: 0 },
      { q: 'Clone graph technique.', options: ['DFS + map','Queue only','Set','Trie'], a: 0 },
      { q: 'Median of two arrays.', options: ['Merge and find','Binary search partitions','Heap','Stack'], a: 1 },
      { q: 'LRU eviction is.', options: ['LRU','LFU','FIFO','Random'], a: 0 },
      { q: 'Serialize binary tree.', options: ['Preorder with nulls','Inorder','Postorder','Level only'], a: 0 },
    ],
    'System Design': [
      { q: 'News feed ordering.', options: ['FIFO','By recency and relevance','Random','Alphabetical'], a: 1 },
      { q: 'Scale image storage.', options: ['DB','Object storage + CDN','RAM','FTP'], a: 1 },
      { q: 'Prevent hot-partition writes.', options: ['Hash keys','Sequential IDs','Cache only','Random'], a: 0 },
      { q: 'Real-time chat design.', options: ['Polling','WebSockets','FTP','Email'], a: 1 },
      { q: 'Idempotent API importance.', options: ['Retry safety','Speed','Logging','Auth'], a: 0 },
    ],
  },
  Apple: {
    DSA: [
      { q: 'Three sum approach.', options: ['Brute force','Sort + two pointers','Binary search','DP'], a: 1 },
      { q: 'Longest common prefix.', options: ['Trie','Sort + compare','DP','Stack'], a: 1 },
      { q: 'Valid BST check.', options: ['Inorder monotonic','Level order','Preorder only','Postorder only'], a: 0 },
      { q: 'Min stack design.', options: ['Stack + second stack','Queue','Linked list','Heap'], a: 0 },
      { q: 'House robber.', options: ['Greedy','DP','Backtracking','Sort'], a: 1 },
    ],
    'Problem Solving': [
      { q: 'Optimize app cold start.', options: ['Lazy load','Load everything','No cache','Sync only'], a: 0 },
      { q: 'Profile performance.', options: ['Logs','Profiler tools','Guess','User reports'], a: 1 },
      { q: 'Memory leak sign.', options: ['Stable RAM','Growing RAM','Low CPU','Fast IO'], a: 1 },
      { q: 'Concurrency bug fix.', options: ['Mutex','Prints','Delay','Retry only'], a: 0 },
      { q: 'Networking retries.', options: ['Exponential backoff','Constant','None','Random'], a: 0 },
    ],
  },
}

export const COMMON_TESTS = {
  DSA: [
    { q: 'Two Sum best approach.', options: ['Hash map','Two pointers','Brute force','Binary search'], a: 0 },
    { q: 'Detect cycle in linked list.', options: ['Fast/slow pointers','Stack','Sort','Queue'], a: 0 },
    { q: 'Balanced parentheses.', options: ['Stack','Queue','Set','Map'], a: 0 },
    { q: 'Max subarray sum.', options: ['Kadane','Prefix sums','Divide and conquer','Greedy'], a: 0 },
    { q: 'Topological sort works on.', options: ['DAG','Tree','Cyclic graph','Array'], a: 0 },
  ],
  'System Design': [
    { q: 'Scale read-heavy service.', options: ['Read replicas','Sharding','Client cache only','Bigger server'], a: 0 },
    { q: 'Cache eviction suitable for hot items.', options: ['LRU','FIFO','Random','LIFO'], a: 0 },
    { q: 'Design rate limiting.', options: ['Token bucket','Round robin','Bloom filter','LRU'], a: 0 },
    { q: 'Ensure idempotency.', options: ['Safe retries','Logs only','No retries','Batch only'], a: 0 },
    { q: 'Autocomplete structure.', options: ['Trie','Heap','Queue','Stack'], a: 0 },
  ],
  Aptitude: TEST_SETS.Aptitude,
  HR: TEST_SETS.HR,
  Technical: TEST_SETS.Technical,
}