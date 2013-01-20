function btnNextCallback(e) {
	Alloy.createController('forms/sign').getView().open();
	$.add.close();
}

function btnPreviousCallback(e) {
	Alloy.createController('forms/overview').getView().open();
	$.add.close();
}

function btnBackCallback(e) {
	Alloy.createController('addExpense').getView().open();
	$.add.close();
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