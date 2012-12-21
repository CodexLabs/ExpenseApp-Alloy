function btnNextCallback(e) {
	var sign = Alloy.createController('forms/sign').getView();
	sign.open();
}

function btnPreviousCallback(e) {
	var overview = Alloy.createController('forms/overview').getView();
	overview.open();
}

function btnBackCallback(e) {
	var addExpense = Alloy.createController('addExpense').getView();
	addExpense.open();
}

function changeGrouping(e) {
  if (OS_ANDROID) {
    if (e.source.id === 'domesticSwitch') {
      if (e.source.value) {
        // currentView = 'by_domestic';
        alert("now domestic");
      }
      $.abroadSwitch.value = !e.source.value;
    }
    else if (e.source.id === 'abroadSwitch') {
      if (e.source.value) {
        // currentView = 'by_abroad';
        alert("now Abroad");
      }
      $.domesticSwitch.value = !e.source.value;
    }
  }
  else if (OS_IOS) {
    switch (e.index) {
      case 0:
        // currentView = 'by_domestic';
        alert("now domestic");
        break;
      case 1:
        // currentView = 'by_abroad';
        alert("now Abroad");
        break;
    }
  }
}