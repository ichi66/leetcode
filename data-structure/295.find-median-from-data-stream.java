/*
 * @lc app=leetcode id=295 lang=java
 *
 * [295] Find Median from Data Stream
 */

// @lc code=start
class MedianFinder {
    private PriorityQueue<Integer> large; // 从小到大排列
    private PriorityQueue<Integer> small; /// 从大到小排列
    public MedianFinder() {
      large = new PriorityQueue<Integer>();
      small = new PriorityQueue<Integer>((a,b) -> {return b-a;});
        
    }
    
    public void addNum(int num) {
      if(small.size() < large.size() ){
        large.offer(num);
        small.offer(large.poll());
      }else{
        small.offer(num);
        large.offer(small.poll());
      }
    }
    
    public double findMedian() {
      if(small.size() < large.size() ){
        return large.peek();
      }else if(large.size() < small.size()){
        return small.peek();
      }
      return (large.peek() + small.peek()) / 2.0;
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * MedianFinder obj = new MedianFinder();
 * obj.addNum(num);
 * double param_2 = obj.findMedian();
 */
// @lc code=end

