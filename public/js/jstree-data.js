
$(function() {
  $('#container').jstree({
    'core' : {
      'data' : [
		{
              "text" : "Dashboard",
              "state" : {"opened" : false },
			  "icon" : "fa fa-folder-open-o",
			  "tooltip": "dashboard"
		},
		{
              "text" : "Widgets",
              "state" : {"opened" : false },
			  "icon" : "fa fa-folder-open-o"
		},
          {
              "text" : "UI Elements",
              "state" : {"opened" : false },
			  "icon" : "fa fa-folder-open-o",
              "children" : [
                  {
                    "text" : "Arrows",
                    "state" : { "selected" : false },
					"url" : "/admin/arrows",
                    "icon" : "fa fa-file-code-o"
                  },
				  {
                    "text" : "Badges",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  },
				  {
                    "text" : "Buttons",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  },
				  {
                    "text" : "Cards",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  },
				  {
                    "text" : "Dividers",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  },
				  {
                    "text" : "Files",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  },
				  {
                    "text" : "Flags",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  },
				  {
                    "text" : "Grid System",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  },
				  {
                    "text" : "Icons",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  },
				  {
                    "text" : "Labels",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  },
				  {
                    "text" : "Lists",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  },
				  {
                    "text" : "Pricing-cards",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  },
				  {
                    "text" : "Progress Bars",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  },
				  {
                    "text" : "Spinners",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  },
				  {
                    "text" : "Toastr",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  },
				  {
                    "text" : "Typography",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  },
                  
              ]
        },
		{
              "text" : "Forms",
              "state" : {"opened" : false },
			  "icon" : "fa fa-folder-open-o",
              "children" : [
                  {
                    "text" : "Cropper",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  },
                  {
                    "text" : "Form Controls",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  },
				  {
                    "text" : "Form Layouts",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  },
				  {
                    "text" : "Form Validation",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  },
				  {
                    "text" : "Form Wizard",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  },
				  {
                    "text" : "Input Mask",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  },
				  {
                    "text" : "Material From Controls",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  },
				  {
                    "text" : "Material From Validation",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  },
				  {
                    "text" : "Pickers",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  },
				  {
                    "text" : "Select",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  },
				  {
                    "text" : "Sliders",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  },
				  {
                    "text" : "Toggle",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  },
				  {
                    "text" : "Uploader",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  },
				  
              ]
        },
		{
              "text" : "Tables",
              "state" : {"opened" : true },
			  "icon" : "fa fa-folder-open-o",
              "children" : [
                  {
                    "text" : "Static Tables",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  },
                  {
                    "text" : "Dynamic Tables",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  }
			 ]
        },
		{
              "text" : "Charts",
              "state" : {"opened" : false },
			  "icon" : "fa fa-folder-open-o"
		},
		{
              "text" : "Maps",
              "state" : {"opened" : false },
			  "icon" : "fa fa-folder-open-o",
              "children" : [
                  {
                    "text" : "Vector Maps",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  },
                  {
                    "text" : "Google Maps",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  }
			 ]
        },
		{
              "text" : "Authentication",
              "state" : {"opened" : false },
			  "icon" : "fa fa-folder-open-o",
              "children" : [
                  {
                    "text" : "Signup",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  },
				  {
                    "text" : "Login",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  },
                  {
                    "text" : "Reset Password",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  }
			 ]
        },
		{
              "text" : "Contacts",
              "state" : {"opened" : false },
			  "icon" : "fa fa-folder-open-o"
		},
		{
              "text" : "Mailbox",
              "state" : {"opened" : false },
			  "icon" : "fa fa-folder-open-o",
              "children" : [
                  {
                    "text" : "Mail",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  },
				  {
                    "text" : "Inbox",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  },
                  {
                    "text" : "Compose",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  }
			 ]
        },
		{
              "text" : "Messenger",
              "state" : {"opened" : false },
			  "icon" : "fa fa-folder-open-o"
		},
		{
              "text" : "Profile",
              "state" : {"opened" : false },
			  "icon" : "fa fa-folder-open-o"
		},
		{
              "text" : "Upload",
              "state" : {"opened" : false },
			  "icon" : "fa fa-folder-open-o"
		},
		{
              "text" : "Other Pages",
              "state" : {"opened" : false },
			  "icon" : "fa fa-folder-open-o",
              "children" : [
                  {
                    "text" : "Blank",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  },
				  {
                    "text" : "404",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  },
                  {
                    "text" : "500",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  },
				  {
                    "text" : "invoice",
                    "state" : { "selected" : false },
                    "icon" : "fa fa-file-code-o"
                  }
			 ]
        }
      ]
    }
  });
});

$('#container2').jstree({
  "core" : { "check_callback" : true }, // so that operations work
  "types" : {
    "default" : {
      "icon" : "fa fa-file-code-o"
    },
    "demo" : {
      "icon" : "fa fa-folder-open-o"
    }
  }, // so that operations work
  "plugins" : ["contextmenu", "types"]
});


$(function() {
  $('#container3').jstree({
    'core' : {
      'data' : {
        "url" : "/json/jstree-1.json"
      }
    }
  });
});


$('#container4').jstree({
"core" : { "check_callback" : true },
"types" : {
    "default" : {
      "icon" : "fa fa-file-code-o"
    },
    "demo" : {
      "icon" : "fa fa-folder-open-o"
    }
  }, // so that operations work
  "plugins" : ["search", "dnd", "types"]
});
$("#s").submit(function(e) {
  e.preventDefault();
  $("#container4").jstree(true).search($("#q").val());
});

$('#container5').jstree({
  "plugins" : ["checkbox"]
});