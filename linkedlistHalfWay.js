/* Basic Hare and Tortoise Method */
public void middle(){
    node slow=start.next;
    node fast=start.next;
    while(fast.next!=null)
    {
        slow=slow.next;
        fast=fast.next.next;
    }

    System.out.println(slow.data);
}
