    // var tablinks = document.getElementsByClassName("tab-links");
    // var tabcontents = document.getElementsByClassName("tab-contents");

    // function opentab(tabname) {
    //   for (tablink of tablinks) {
    //        tablink.classList.remove("active-link");
    //   }
    //   for (tabcontent of tabcontents) {
    //        tabcontent.classList.remove("active-tab");
    //   }
    // }

    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    
    function opentab(tabname) {
        // Remove active-link and active-tab classes from all tab links and contents
        for (tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
    
        // Add active-tab to the selected tab content
        // document.getElementById(tabname).classList.add("active-tab");
    
        // Add active-link to the clicked tab
        event.target.classList.add("active-link");
    }
    
    