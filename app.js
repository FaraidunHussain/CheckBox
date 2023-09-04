function ShowHide() {
   var head1 = document.getElementById("head1");
   var head2 = document.getElementById("head2");
   var showhead1 = document.form1.head1.checked;
   var showhead2 = document.form1.head2.checked;
      head1.style.visibility=(showhead1) ? "visible" : "hidden";
      head2.style.visibility=(showhead2) ? "visible" : "hidden";
}