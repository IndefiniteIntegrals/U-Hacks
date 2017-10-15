//
//  probabilityViewController.swift
//  ChatBot
//
//  Created by Abhay Sidhwani on 15/10/17.
//

import UIKit

class probabilityViewController: UIViewController {

    @IBOutlet weak var t1: UILabel!
    
    @IBOutlet weak var t2: UILabel!
    
    @IBOutlet weak var t3: UILabel!
    
    @IBOutlet weak var t4: UILabel!
    
    @IBOutlet weak var t5: UILabel!
    
    @IBOutlet weak var p1: UILabel!
    
    @IBOutlet weak var p2: UILabel!
    
    @IBOutlet weak var p3: UILabel!
    
    @IBOutlet weak var p4: UILabel!
    
    @IBOutlet weak var p5: UILabel!
    
    @IBOutlet weak var e1: UILabel!
    @IBOutlet weak var e2: UILabel!
    
    @IBOutlet weak var e3: UILabel!
    
    @IBOutlet weak var e4: UILabel!
    
    @IBOutlet weak var e5: UILabel!
    
    var t11 = String()
    var t22 = String()
    var t33 = String()
    var t44 = String()
    var t55 = String()
    var p11 = String()
    var p22 = String()
    var p33 = String()
    var p44 = String()
    var p55 = String()
    var e11 = String()
    var e22 = String()
    var e33 = String()
    var e44 = String()
    var e55 = String()
    override func viewDidLoad() {
        super.viewDidLoad()
        t1.text = t11
        t2.text = t22
        t3.text = t33
        t4.text = t44
        t5.text  = t55
        p1.text = p11
        p2.text = p22
        p3.text = p33
        p4.text = p44
        p5.text = p55
        e1.text = e11
        e2.text = e22
        e3.text = e33
        e4.text = e44
        e5.text = e55
        

        // Do any additional setup after loading the view.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destinationViewController.
        // Pass the selected object to the new view controller.
    }
    */

}
