// Footer 組件
class FooterComponent {
    constructor() {
        this.init();
    }

    init() {
        this.createFooter();
    }

    createFooter() {
        const footerHTML = `
            <footer class="footer">
                <div class="footer-content">
                    <div class="footer-section">
                        <h4>HKT Intranet</h4>
                        <p>Empowering employees with modern digital solutions</p>
                    </div>
                    <div class="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="#">Apps</a></li>
                            <li><a href="#">Documents</a></li>
                            <li><a href="#">Directory</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">IT Support</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Feedback</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h4>Contact</h4>
                        <p>Email: support@hkt.com</p>
                        <p>Phone: (852) 2888-0000</p>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2024 HKT Limited. All rights reserved.</p>
                </div>
            </footer>
        `;
        
        return footerHTML;
    }
}

// 導出組件
window.FooterComponent = FooterComponent;
