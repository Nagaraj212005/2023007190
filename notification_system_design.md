# Stage 1

## Approach

The priority inbox ranks notifications based on:

1. Notification Type Weight

   * Placement = 3
   * Result = 2
   * Event = 1

2. Recency

   * Newer notifications are given higher priority when weights are equal.

## Algorithm

1. Assign a weight to each notification type.
2. Sort notifications by weight in descending order.
3. If two notifications have the same weight, sort them by timestamp in descending order.
4. Display the top 10 notifications.

## Maintaining Top 10 Efficiently

As new notifications arrive, a Min Heap of size 10 can be maintained.

Steps:

1. Insert new notification.
2. Compare with lowest priority notification in heap.
3. Replace if new notification has higher priority.
4. Heap always contains the current top 10 notifications.

Time Complexity:

* Sorting Approach: O(n log n)
* Heap Approach: O(log 10) ≈ O(1) per insertion

Space Complexity:

* O(10) for heap-based solution

This approach ensures efficient retrieval of the highest priority unread notifications while handling continuous notification arrivals.

O(N)