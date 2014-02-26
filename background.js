// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*! toggleStyles.js (c) 2013, 2014 guest271314 http://guest271314.com https://github.com/guest271314/toggleStyles-chromium-extension */
chrome.browserAction.onClicked.addListener(function(tab) {   
  chrome.tabs.executeScript(null, {file: "jquery-1.10.2.min.js"}, function() {
    chrome.tabs.executeScript(null, {file: "toggleStyles.js"})
  });   
});
