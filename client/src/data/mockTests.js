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
  Netflix: {
    DSA: [
      { q: 'Group Anagrams strategy.', options: ['Sort chars as key','Brute force','Permutations','Length check'], a: 0 },
      { q: 'Merge k Sorted Lists.', options: ['Min-heap','Sort all','Iterative merge','Stack'], a: 0 },
      { q: 'Word Ladder approach.', options: ['BFS','DFS','DP','Greedy'], a: 0 },
      { q: 'Sliding Window Maximum.', options: ['Deque','Heap','Stack','Array'], a: 0 },
      { q: 'Design Twitter Feed.', options: ['Pull/Push model','SQL only','No cache','Static files'], a: 0 },
    ],
    'System Design': [
      { q: 'Video streaming protocol.', options: ['HLS/DASH','FTP','SMTP','Telnet'], a: 0 },
      { q: 'CDN usage in streaming.', options: ['Reduce latency','Increase latency','Store metadata','Process payments'], a: 0 },
      { q: 'Microservices benefit.', options: ['Decoupling','Monolithic speed','Simplicity','No network calls'], a: 0 },
      { q: 'Chaos Engineering purpose.', options: ['Test resilience','Break prod for fun','Increase cost','Disable logging'], a: 0 },
      { q: 'Handling thundering herd.', options: ['Jitter/Backoff','Immediate retry','Crash','Increase timeout'], a: 0 },
    ],
  },
  Tesla: {
    DSA: [
      { q: 'Maximal Rectangle in binary matrix.', options: ['Histogram logic','Brute force','DFS','Greedy'], a: 0 },
      { q: 'Trapping Rain Water.', options: ['Two pointers','Sort','Stack only','Queue'], a: 0 },
      { q: 'Reorganize String.', options: ['Heap/Greedy','Sort','Random shuffle','DP'], a: 0 },
      { q: 'Basic Calculator implementation.', options: ['Stack','Queue','Tree','Graph'], a: 0 },
      { q: 'Serialize/Deserialize BST.', options: ['Preorder','Level order','Inorder only','Postorder only'], a: 0 },
    ],
    'Embedded/Real-time': [
      { q: 'Volatile keyword purpose.', options: ['Prevent compiler optimization','Speed up','Memory allocation','Thread creation'], a: 0 },
      { q: 'Priority Inversion solution.', options: ['Priority Inheritance','Disabling interrupts','Ignore','Round robin'], a: 0 },
      { q: 'CAN Bus is.', options: ['Message-based protocol','Address-based','Point-to-point','Wireless'], a: 0 },
      { q: 'Watchdog Timer use.', options: ['Reset hung system','Count time','Alarm','User input'], a: 0 },
      { q: 'Interrupt Latency is.', options: ['Time to start ISR','Time to finish ISR','Time to boot','Time to compile'], a: 0 },
    ],
  },
  NVIDIA: {
    DSA: [
      { q: 'Reverse bits of integer.', options: ['Bit manipulation','String conversion','Array loop','Stack'], a: 0 },
      { q: 'Power of two check.', options: ['n & (n-1) == 0','n % 2 == 0','Loop div 2','Log check'], a: 0 },
      { q: 'Single Number in array.', options: ['XOR','Map','Sort','Set'], a: 0 },
      { q: 'Count set bits.', options: ['Brian Kernighan algo','Loop shift','Lookup table','All of above'], a: 3 },
      { q: 'Rotate Image (Matrix).', options: ['Transpose + Reverse','Copy array','Rotate per pixel','Stack'], a: 0 },
    ],
    'Hardware/Systems': [
      { q: 'CUDA is for.', options: ['Parallel computing on GPU','CPU scheduling','Web dev','Database'], a: 0 },
      { q: 'Cache coherency protocol.', options: ['MESI','HTTP','TCP','UDP'], a: 0 },
      { q: 'Virtual Memory benefit.', options: ['Isolation/Protection','Faster than RAM','Smaller space','No paging'], a: 0 },
      { q: 'Pipeline hazard type.', options: ['Data hazard','Fire hazard','Electric hazard','Road hazard'], a: 0 },
      { q: 'SIMD stands for.', options: ['Single Instruction Multiple Data','Simple Int My Data','Serial Input Max Data','None'], a: 0 },
    ],
  },
  Accenture: {
    Aptitude: [
      { q: 'Next number: 2, 6, 12, 20, ?', options: ['30','42','28','36'], a: 0 },
      { q: 'Odd one out: 3, 5, 7, 9, 11', options: ['9','3','5','11'], a: 0 },
      { q: 'Cost price if 20% profit on 100.', options: ['83.33','80','120','90'], a: 0 },
      { q: 'A is B\'s sister. C is B\'s mother. A is C\'s?', options: ['Daughter','Son','Aunt','Niece'], a: 0 },
      { q: 'Train 100m long crosses pole in 10s. Speed?', options: ['36 km/h','10 m/s','Both','None'], a: 2 },
    ],
    'Logical': [
      { q: 'Syllogism: All cats are dogs.', options: ['Venn diagram','Algebra','Calculus','Statistics'], a: 0 },
      { q: 'Coding-Decoding: APPLE -> BQQMF', options: ['+1 shift','-1 shift','Reverse','Random'], a: 0 },
      { q: 'Direction sense: North turn right...', options: ['Draw path','Guess','Compass','Formula'], a: 0 },
      { q: 'Seating arrangement type.', options: ['Circular/Linear','Random','Stacked','Scattered'], a: 0 },
      { q: 'Blood relations check.', options: ['Family tree','DNA','Blood test','Guess'], a: 0 },
    ],
  },
  Deloitte: {
    Aptitude: [
      { q: 'Percentage increase 40 to 50.', options: ['25%','20%','10%','15%'], a: 0 },
      { q: 'Work: A=10d, B=15d. Together?', options: ['6 days','5 days','8 days','12.5 days'], a: 0 },
      { q: 'Average of first 5 multiples of 3.', options: ['9','3','15','12'], a: 0 },
      { q: 'Probability of sum 7 in 2 dice.', options: ['1/6','1/12','1/36','1/9'], a: 0 },
      { q: 'HCF of 24 and 36.', options: ['12','6','24','4'], a: 0 },
    ],
    'Verbal': [
      { q: 'Synonym of "Abundant".', options: ['Plentiful','Scarce','Rare','Small'], a: 0 },
      { q: 'Antonym of "Optimistic".', options: ['Pessimistic','Happy','Hopeful','Bright'], a: 0 },
      { q: 'Spot the error: "He go to school".', options: ['go -> goes','He -> Him','school -> schools','No error'], a: 0 },
      { q: 'Sentence ordering.', options: ['Logic flow','Random','Lengthwise','Alphabetical'], a: 0 },
      { q: 'Idiom: "Piece of cake".', options: ['Easy task','Food','Hard task','Dessert'], a: 0 },
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
  'Goldman Sachs': {
    DSA: [
      { q: 'Trapping Rain Water.', options: ['Two pointers','DP','Stack','All of above'], a: 3 },
      { q: 'Median of Data Stream.', options: ['Two Heaps','Sort','Stack','Queue'], a: 0 },
      { q: 'Best Time to Buy and Sell Stock.', options: ['One pass','Brute force','DP','Sort'], a: 0 },
      { q: 'Minimum Path Sum.', options: ['DP','Greedy','DFS','BFS'], a: 0 },
      { q: 'First Unique Character.', options: ['Hash Map','Sort','Stack','Queue'], a: 0 },
    ],
    'Quant/Math': [
      { q: 'Probability of 2 heads in 3 coins.', options: ['3/8','1/8','1/2','1/4'], a: 0 },
      { q: 'Eigenvalues usage.', options: ['PCA','Sorting','Search','Database'], a: 0 },
      { q: 'Standard Deviation measures.', options: ['Spread','Mean','Mode','Median'], a: 0 },
      { q: 'Correlation range.', options: ['-1 to 1','0 to 1','-10 to 10','0 to 100'], a: 0 },
      { q: 'Derivative of x^2.', options: ['2x','x','2','0'], a: 0 },
    ],
  },
  'JPMorgan Chase': {
    DSA: [
      { q: 'Merge Intervals.', options: ['Sort + Merge','Brute force','Stack','Queue'], a: 0 },
      { q: 'Coin Change problem.', options: ['DP','Greedy','Sort','DFS'], a: 0 },
      { q: 'Valid Parentheses.', options: ['Stack','Queue','Two pointers','Map'], a: 0 },
      { q: 'Happy Number.', options: ['HashSet cycle check','Recursion','Stack','Sort'], a: 0 },
      { q: 'Spiral Matrix.', options: ['Simulation','DFS','BFS','DP'], a: 0 },
    ],
    'Behavioral': [
      { q: 'Situation: Conflict with boss.', options: ['Discuss privately','Ignore','Quit','Complain'], a: 0 },
      { q: 'Situation: Missed deadline.', options: ['Communicate early','Hide it','Blame others','Fake it'], a: 0 },
      { q: 'Situation: Team member slacking.', options: ['Offer help/Talk','Report immediately','Do their work','Ignore'], a: 0 },
      { q: 'Why JPMC?', options: ['Tech + Finance impact','Money only','Brand name','Location'], a: 0 },
      { q: 'Handling pressure.', options: ['Prioritize tasks','Panic','Work 24/7','Give up'], a: 0 },
    ],
  },
  'Morgan Stanley': {
    DSA: [
      { q: 'Lowest Common Ancestor.', options: ['Recursion/DFS','BFS','Sort','Stack'], a: 0 },
      { q: 'Kth Smallest in BST.', options: ['Inorder traversal','Preorder','Postorder','Level order'], a: 0 },
      { q: 'Detect cycle in directed graph.', options: ['DFS + Recursion Stack','BFS','Union Find','Sort'], a: 0 },
      { q: 'Flatten Binary Tree to Linked List.', options: ['Preorder','Inorder','Postorder','Level order'], a: 0 },
      { q: 'Search in Rotated Sorted Array.', options: ['Binary Search','Linear Search','Sort','Hash'], a: 0 },
    ],
    'Java/OOP': [
      { q: 'Difference between Abstract class and Interface.', options: ['Constructors/State','None','Syntax only','Name'], a: 0 },
      { q: 'HashMap internal working.', options: ['Hashing + Buckets','Tree only','List','Stack'], a: 0 },
      { q: 'Immutable class creation.', options: ['Final class/fields','Public fields','Setters','Inheritance'], a: 0 },
      { q: 'Polymorphism types.', options: ['Overloading/Overriding','Static/Dynamic','Both','None'], a: 2 },
      { q: 'Garbage Collection roots.', options: ['Stack/Static','Heap','Disk','Network'], a: 0 },
    ],
  },
  Uber: {
    DSA: [
      { q: 'Bus Routes (BFS).', options: ['BFS','DFS','DP','Greedy'], a: 0 },
      { q: 'Word Search II (Trie).', options: ['Trie + DFS','Hash Map','Brute force','Stack'], a: 0 },
      { q: 'Sudoku Solver.', options: ['Backtracking','Greedy','DP','Sort'], a: 0 },
      { q: 'Serialize N-ary Tree.', options: ['DFS/BFS','Sort','Stack','Queue'], a: 0 },
      { q: 'Construct Quad Tree.', options: ['Recursion','Iterative','DP','Greedy'], a: 0 },
    ],
    'System Design': [
      { q: 'Design Uber backend.', options: ['Geo-hashing','SQL only','No cache','Static'], a: 0 },
      { q: 'Driver-Rider matching.', options: ['Location + Availability','Random','Name match','Age match'], a: 0 },
      { q: 'Handle surge pricing.', options: ['Dynamic demand/supply','Fixed price','Random','Manual'], a: 0 },
      { q: 'Map storage structure.', options: ['Graph/Quadtree','List','Stack','Queue'], a: 0 },
      { q: 'Real-time location updates.', options: ['WebSockets/UDP','Email','FTP','Polling long'], a: 0 },
    ],
  },
  Flipkart: {
    DSA: [
      { q: 'Next Greater Element.', options: ['Stack','Queue','Heap','Sort'], a: 0 },
      { q: 'Min Stack.', options: ['Two stacks','Queue','List','Array'], a: 0 },
      { q: 'Rotting Oranges.', options: ['BFS','DFS','DP','Greedy'], a: 0 },
      { q: 'Alien Dictionary.', options: ['Topological Sort','BFS','DFS','Union Find'], a: 0 },
      { q: 'Celebrity Problem.', options: ['Two pointers/Stack','Graph','Sort','Brute force'], a: 0 },
    ],
    'Machine Coding': [
      { q: 'Design Parking Lot.', options: ['OOP/Classes','Script','One function','Database only'], a: 0 },
      { q: 'Inventory Management.', options: ['Concurrency handle','Global var','No lock','Single thread'], a: 0 },
      { q: 'Design Splitwise.', options: ['Graph simplification','Greedy','Random','SQL'], a: 0 },
      { q: 'Notification System.', options: ['Observer Pattern','Singleton','Factory','Builder'], a: 0 },
      { q: 'Rate Limiter impl.', options: ['Token Bucket','Random','Counter','None'], a: 0 },
    ],
  },
  Paytm: {
    DSA: [
      { q: 'Reverse Linked List in K groups.', options: ['Recursion/Iterative','Stack','Queue','Sort'], a: 0 },
      { q: 'Sort 0s, 1s, 2s.', options: ['Dutch National Flag','Sort','Hash','Stack'], a: 0 },
      { q: 'Left View of Binary Tree.', options: ['Level order/Recursion','Inorder','Postorder','Stack'], a: 0 },
      { q: 'Check for BST.', options: ['Range check','Inorder sorted','Left < Right','All'], a: 3 },
      { q: 'Implement Queue using Stack.', options: ['Two stacks','One stack','Array','List'], a: 0 },
    ],
    'System Design': [
      { q: 'Payment Gateway ACID.', options: ['Atomicity imp','Speed only','No logs','Weak consistency'], a: 0 },
      { q: 'Idempotency in payments.', options: ['Prevent double charge','Speed','UI','Auth'], a: 0 },
      { q: 'QR Code tech.', options: ['2D Barcode','NFC','Bluetooth','Wifi'], a: 0 },
      { q: 'Wallet balance update.', options: ['Transaction/Lock','No lock','Client side','Cache only'], a: 0 },
      { q: 'Fraud detection.', options: ['Anomaly detection','Random check','Manual','Ignore'], a: 0 },
    ],
  },
  Adobe: {
    DSA: [
      { q: 'Edit Distance.', options: ['DP','Greedy','Recursion','Branch Bound'], a: 0 },
      { q: 'Egg Dropping Puzzle.', options: ['DP/Math','Greedy','Simulation','Random'], a: 0 },
      { q: 'String to Integer (atoi).', options: ['Parsing logic','Library','Regex','None'], a: 0 },
      { q: 'Implement LRU Cache.', options: ['Doubly LL + Map','Array','Stack','Queue'], a: 0 },
      { q: 'Check if tree is symmetric.', options: ['Recursion','Iterative','Inorder','Postorder'], a: 0 },
    ],
    'Puzzle/Aptitude': [
      { q: '25 horses 5 tracks.', options: ['7 races','5 races','6 races','10 races'], a: 0 },
      { q: 'Bag of coins, one fake.', options: ['Binary search weight','Random','Linear','Guess'], a: 0 },
      { q: 'Hour and minute hand angle.', options: ['Formula','Measure','Guess','None'], a: 0 },
      { q: 'Water jug problem.', options: ['GCD/Diophantine','Random pour','Fill all','Empty all'], a: 0 },
      { q: 'Bridge crossing puzzle.', options: ['Greedy by time','Random','Fastest first','Slowest first'], a: 0 },
    ],
  },
  'Tata Group': {
    Aptitude: [
      { q: 'Missing number in series.', options: ['Logic pattern','Random','Sum','Product'], a: 0 },
      { q: 'Data Interpretation bar chart.', options: ['Analyze heights','Guess','Color','Width'], a: 0 },
      { q: 'Profit Loss calc.', options: ['Formula','Guess','Estimates','None'], a: 0 },
      { q: 'Train relative speed.', options: ['Add/Sub speeds','Multiply','Divide','Ignore'], a: 0 },
      { q: 'Work and Time efficiency.', options: ['Unit work method','Days','Hours','Men'], a: 0 },
    ],
    'General': [
      { q: 'Tata Steel founding year.', options: ['1907','1900','1947','1868'], a: 0 },
      { q: 'TCS full form.', options: ['Tata Consultancy Services','Tata Computer Services','Tata Cyber','None'], a: 0 },
      { q: 'Tata Motors acquisition.', options: ['JLR','Volvo','BMW','Ford'], a: 0 },
      { q: 'Ethical practice.', options: ['Integrity','Profit only','Shortcuts','Secrecy'], a: 0 },
      { q: 'Tata HQ location.', options: ['Mumbai','Delhi','Kolkata','Bangalore'], a: 0 },
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
  Coding: [
    {
      title: 'Two Sum',
      prompt: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
      signature: 'function solve(nums, target) { /* return [i,j] */ }',
      tests: [
        { input: [[2,7,11,15], 9], output: [0,1] },
        { input: [[3,2,4], 6], output: [1,2] },
        { input: [[3,3], 6], output: [0,1] },
      ],
      link: 'https://leetcode.com/problems/two-sum/'
    },
    {
      title: 'Valid Parentheses',
      prompt: 'Given a string s containing just the characters (){}[], determine if the input string is valid.',
      signature: 'function solve(s) { /* return true/false */ }',
      tests: [
        { input: ['()'], output: true },
        { input: ['()[]{}'], output: true },
        { input: ['(]'], output: false },
        { input: ['([)]'], output: false },
        { input: ['{[]}'], output: true },
      ],
      link: 'https://leetcode.com/problems/valid-parentheses/'
    },
    {
      title: 'Maximum Subarray',
      prompt: 'Given an integer array nums, find the subarray which has the largest sum and return its sum.',
      signature: 'function solve(nums) { /* return number */ }',
      tests: [
        { input: [[-2,1,-3,4,-1,2,1,-5,4]], output: 6 },
        { input: [[1]], output: 1 },
        { input: [[5,4,-1,7,8]], output: 23 },
      ],
      link: 'https://leetcode.com/problems/maximum-subarray/'
    },
    {
      title: 'Merge Two Sorted Lists',
      prompt: 'Merge two sorted linked lists and return it as a sorted list.',
      signature: 'function solve(l1, l2) { /* return merged list as array */ }',
      tests: [
        { input: [[1,2,4],[1,3,4]], output: [1,1,2,3,4,4] },
        { input: [[],[]], output: [] },
        { input: [[],[0]], output: [0] },
      ],
      link: 'https://leetcode.com/problems/merge-two-sorted-lists/'
    },
    {
      title: 'Binary Search',
      prompt: 'Given a sorted array of integers nums and a target, return the index if the target is found. Otherwise, return -1.',
      signature: 'function solve(nums, target) { /* return index or -1 */ }',
      tests: [
        { input: [[-1,0,3,5,9,12], 9], output: 4 },
        { input: [[-1,0,3,5,9,12], 2], output: -1 },
      ],
      link: 'https://leetcode.com/problems/binary-search/'
    },
  ],
  Aptitude: TEST_SETS.Aptitude,
  HR: TEST_SETS.HR,
  Technical: TEST_SETS.Technical,
}
