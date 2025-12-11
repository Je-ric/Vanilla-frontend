document.addEventListener('DOMContentLoaded', function() {
  // =====================================================
  // ELEMENT SELECTORS AND INITIALIZATION
  // =====================================================
  // Core editor elements
  const editor = document.getElementById('editor');
  const articleTitle = document.getElementById('article-title');
  
  // Tabs and ribbons
  const tabs = document.querySelectorAll('.flex.border-b button');
  const ribbons = [
    document.getElementById('text-ribbon'),
    document.getElementById('insert-ribbon'),
    document.getElementById('layout-ribbon')
  ];
  
  // Floating controls
  const textColorBtn = document.getElementById('text-color-btn');
  const textColorPicker = document.getElementById('text-color-picker');
  const highlightBtn = document.getElementById('highlight-btn');
  const highlightColorPicker = document.getElementById('highlight-color-picker');
  const imageBtn = document.getElementById('image-btn');
  const imageUpload = document.getElementById('image-upload');
  const imageControls = document.getElementById('image-controls');
  const linkBtn = document.getElementById('link-btn');
  const linkEditor = document.getElementById('link-editor');
  const tableBtn = document.getElementById('table-btn');
  const tableCreator = document.getElementById('table-creator');
  const columnLayoutBtn = document.getElementById('column-layout-btn');
  const columnDropdown = document.getElementById('column-dropdown');
  
  // Preview elements
  const previewBtn = document.getElementById('preview-btn');
  const previewModal = document.getElementById('preview-modal');
  const previewContent = document.getElementById('preview-content');
  const closePreview = document.getElementById('close-preview');
  
  // State variables
  let selectedImage = null;
  let currentSelectedElement = null;

  // =====================================================
  // UI CONTROL FUNCTIONS
  // =====================================================
  
  // Tab Switching
  function initTabSwitching() {
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => {
          t.classList.remove('bg-gray-200');
          t.classList.add('hover:bg-gray-100');
        });
        tab.classList.add('bg-gray-200');
        tab.classList.remove('hover:bg-gray-100');
        
        ribbons.forEach(ribbon => ribbon.classList.add('hidden'));
        ribbons[index]?.classList.remove('hidden');
        
        // Hide all floating controls when changing tabs
        hideAllFloatingControls();
      });
    });
  }
  
  // Helper function to hide all floating controls
  function hideAllFloatingControls() {
    textColorPicker.style.display = 'none';
    highlightColorPicker.style.display = 'none';
    tableCreator.style.display = 'none';
    linkEditor.style.display = 'none';
    imageControls.style.display = 'none';
    columnDropdown.style.display = 'none';
  }
  
  // Click outside to close floating controls
  function initClickOutsideHandler() {
    document.addEventListener('click', function(e) {
      const isColorBtn = e.target.closest('#text-color-btn');
      const isColorPicker = e.target.closest('#text-color-picker');
      const isHighlightBtn = e.target.closest('#highlight-btn');
      const isHighlightPicker = e.target.closest('#highlight-color-picker');
      const isTableBtn = e.target.closest('#table-btn');
      const isTableCreator = e.target.closest('#table-creator');
      const isLinkBtn = e.target.closest('#link-btn');
      const isLinkEditor = e.target.closest('#link-editor');
      const isColumnBtn = e.target.closest('#column-layout-btn');
      const isColumnDropdown = e.target.closest('#column-dropdown');
      
      if (!isColorBtn && !isColorPicker) textColorPicker.style.display = 'none';
      if (!isHighlightBtn && !isHighlightPicker) highlightColorPicker.style.display = 'none';
      if (!isTableBtn && !isTableCreator) tableCreator.style.display = 'none';
      if (!isLinkBtn && !isLinkEditor) linkEditor.style.display = 'none';
      if (!isColumnBtn && !isColumnDropdown) columnDropdown.style.display = 'none';
    });
  }

  // =====================================================
  // TEXT FORMATTING FUNCTIONS
  // =====================================================
  
  function initTextFormatting() {
    // Basic formatting buttons
    document.getElementById('bold-btn').addEventListener('click', () => {
      document.execCommand('bold', false, null);
      editor.focus();
    });
    
    document.getElementById('italic-btn').addEventListener('click', () => {
      document.execCommand('italic', false, null);
      editor.focus();
    });
    
    document.getElementById('underline-btn').addEventListener('click', () => {
      document.execCommand('underline', false, null);
      editor.focus();
    });
    
    document.getElementById('strikethrough-btn').addEventListener('click', () => {
      document.execCommand('strikeThrough', false, null);
      editor.focus();
    });
    
    // Text alignment
    document.getElementById('align-left-btn').addEventListener('click', () => {
      document.execCommand('justifyLeft', false, null);
      editor.focus();
    });
    
    document.getElementById('align-center-btn').addEventListener('click', () => {
      document.execCommand('justifyCenter', false, null);
      editor.focus();
    });
    
    document.getElementById('align-right-btn').addEventListener('click', () => {
      document.execCommand('justifyRight', false, null);
      editor.focus();
    });
    
    document.getElementById('align-justify-btn').addEventListener('click', () => {
      document.execCommand('justifyFull', false, null);
      editor.focus();
    });
    
    // Text color
    textColorBtn.addEventListener('click', function(e) {
      const rect = textColorBtn.getBoundingClientRect();
      textColorPicker.style.display = 'block';
      textColorPicker.style.top = rect.bottom + 5 + 'px';
      textColorPicker.style.left = rect.left + 'px';
      e.stopPropagation();
    });
    
    textColorPicker.querySelectorAll('.color-option').forEach(option => {
      option.addEventListener('click', function() {
        const color = this.getAttribute('data-color');
        document.execCommand('foreColor', false, color);
        textColorPicker.style.display = 'none';
        editor.focus();
      });
    });
    
    // Highlighting
    highlightBtn.addEventListener('click', function(e) {
      const rect = highlightBtn.getBoundingClientRect();
      highlightColorPicker.style.display = 'block';
      highlightColorPicker.style.top = rect.bottom + 5 + 'px';
      highlightColorPicker.style.left = rect.left + 'px';
      e.stopPropagation();
    });
    
    highlightColorPicker.querySelectorAll('.color-option').forEach(option => {
      option.addEventListener('click', function() {
        const color = this.getAttribute('data-color');
        if (color === 'transparent') {
          document.execCommand('removeFormat', false, null);
        } else {
          document.execCommand('hiliteColor', false, color);
        }
        highlightColorPicker.style.display = 'none';
        editor.focus();
      });
    });
    
    // Font family and size - FIXED implementation
    document.getElementById('font-family').addEventListener('change', function() {
      document.execCommand('fontName', false, this.value);
      editor.focus();
    });
    
    document.getElementById('font-size').addEventListener('change', function() {
      // Get the selected text
      const selection = window.getSelection();
      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        
        // Create a span with the desired font size
        const sizeValue = this.value + 'px';
        const span = document.createElement('span');
        span.style.fontSize = sizeValue;
        
        // Apply it to the selection
        const fragment = range.extractContents();
        span.appendChild(fragment);
        range.insertNode(span);
        
        // Restore selection
        selection.removeAllRanges();
        selection.addRange(range);
      }
      
      editor.focus();
    });
    
    // Clear formatting
    document.getElementById('clear-format-btn').addEventListener('click', () => {
      document.execCommand('removeFormat', false, null);
      editor.focus();
    });
    
    // Text styles - FIXED implementation
    document.getElementById('text-style').addEventListener('change', function() {
      const tag = this.value;
      const selection = window.getSelection();
      
      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        let selectedNode = range.commonAncestorContainer;
        
        // Get the element node (if the selection is in a text node)
        if (selectedNode.nodeType === 3) { // Text node
          selectedNode = selectedNode.parentNode;
        }
        
        // Find the closest block element that we want to replace
        let blockElement = selectedNode;
        const editorNode = editor.closest('.editor-content') || editor;
        
        while (blockElement && 
               !['P', 'H1', 'H2', 'H3', 'H4', 'BLOCKQUOTE', 'PRE'].includes(blockElement.nodeName) &&
               blockElement !== editorNode) {
          blockElement = blockElement.parentNode;
        }
        
        if (blockElement && blockElement !== editorNode) {
          // Create new element
          const newElement = document.createElement(tag);
          
          // Copy all child nodes
          while (blockElement.firstChild) {
            newElement.appendChild(blockElement.firstChild);
          }
          
          // Replace old element with new one
          blockElement.parentNode.replaceChild(newElement, blockElement);
          
          // Try to set cursor position inside the new element
          try {
            range.selectNodeContents(newElement);
            range.collapse(false); // Collapse to end
            selection.removeAllRanges();
            selection.addRange(range);
          } catch (e) {
            console.error("Error setting selection:", e);
          }
        } else {
          // If no suitable block element found, wrap selection in new tag
          const newElement = document.createElement(tag);
          range.surroundContents(newElement);
        }
      }
      
      editor.focus();
    });
  }
  
  // =====================================================
  // LIST HANDLING FUNCTIONS
  // =====================================================
  
  function initListHandling() {
    document.getElementById('bullet-list-btn').addEventListener('click', () => {
      document.execCommand('insertUnorderedList', false, null);
      editor.focus();
    });
    
    document.getElementById('number-list-btn').addEventListener('click', () => {
      document.execCommand('insertOrderedList', false, null);
      editor.focus();
    });
    
    document.getElementById('decrease-indent-btn').addEventListener('click', () => {
      document.execCommand('outdent', false, null);
      editor.focus();
    });
    
    document.getElementById('increase-indent-btn').addEventListener('click', () => {
      document.execCommand('indent', false, null);
      editor.focus();
    });
  }
  
  // =====================================================
  // IMAGE HANDLING FUNCTIONS
  // =====================================================
  
  function initImageHandling() {
    imageBtn.addEventListener('click', function() {
      imageUpload.click();
    });
    
    imageUpload.addEventListener('change', function() {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          const img = document.createElement('img');
          img.src = e.target.result;
          img.className = 'cursor-move my-2';
          img.style.maxWidth = '100%';
          
          // Insert at cursor position
          document.execCommand('insertHTML', false, img.outerHTML);
          
          // Make the newly inserted image draggable
          setTimeout(initializeImageDragging, 100); // Delay to ensure DOM is updated
        };
        reader.readAsDataURL(file);
      }
    });
    
    // Image controls
    document.getElementById('image-left-align-btn').addEventListener('click', function() {
      if (selectedImage) {
        selectedImage.style.display = 'block';
        selectedImage.style.marginLeft = '0';
        selectedImage.style.marginRight = 'auto';
        selectedImage.classList.remove('float-left', 'float-right');
      }
    });
    
    document.getElementById('image-center-align-btn').addEventListener('click', function() {
      if (selectedImage) {
        selectedImage.style.display = 'block';
        selectedImage.style.marginLeft = 'auto';
        selectedImage.style.marginRight = 'auto';
        selectedImage.classList.remove('float-left', 'float-right');
      }
    });
    
    document.getElementById('image-right-align-btn').addEventListener('click', function() {
      if (selectedImage) {
        selectedImage.style.display = 'block';
        selectedImage.style.marginLeft = 'auto';
        selectedImage.style.marginRight = '0';
        selectedImage.classList.remove('float-left', 'float-right');
      }
    });
    
    document.getElementById('image-float-left-btn').addEventListener('click', function() {
      if (selectedImage) {
        selectedImage.style.display = 'inline';
        selectedImage.style.marginLeft = '';
        selectedImage.style.marginRight = '';
        selectedImage.classList.remove('float-right');
        selectedImage.classList.add('float-left');
      }
    });
    
    document.getElementById('image-float-right-btn').addEventListener('click', function() {
      if (selectedImage) {
        selectedImage.style.display = 'inline';
        selectedImage.style.marginLeft = '';
        selectedImage.style.marginRight = '';
        selectedImage.classList.remove('float-left');
        selectedImage.classList.add('float-right');
      }
    });
    
    document.getElementById('image-width').addEventListener('change', function() {
      if (selectedImage) {
        selectedImage.style.width = this.value + 'px';
      }
    });
    
    document.getElementById('image-remove-btn').addEventListener('click', function() {
      if (selectedImage) {
        selectedImage.parentNode.removeChild(selectedImage);
        imageControls.style.display = 'none';
        selectedImage = null;
      }
    });
    
    // Layout tab image controls
    document.getElementById('image-left-btn').addEventListener('click', function() {
      if (selectedImage) {
        document.getElementById('image-left-align-btn').click();
      }
    });
    
    document.getElementById('image-center-btn').addEventListener('click', function() {
      if (selectedImage) {
        document.getElementById('image-center-align-btn').click();
      }
    });
    
    document.getElementById('image-right-btn').addEventListener('click', function() {
      if (selectedImage) {
        document.getElementById('image-right-align-btn').click();
      }
    });
    
    document.getElementById('image-wrap-btn').addEventListener('click', function() {
      if (selectedImage) {
        document.getElementById('image-float-left-btn').click();
      }
    });
    
    // Hide image controls when clicking elsewhere
    editor.addEventListener('click', function(e) {
      if (e.target !== selectedImage && !e.target.closest('#image-controls')) {
        imageControls.style.display = 'none';
        selectedImage = null;
      }
    });
  }
  
  // Make images draggable and selectable
  function initializeImageDragging() {
    const images = editor.querySelectorAll('img');
    
    images.forEach(img => {
      if (!img.getAttribute('data-draggable')) {
        img.setAttribute('data-draggable', 'true');
        
        img.addEventListener('mousedown', function(e) {
          selectedImage = this;

          // Show image controls
          const rect = selectedImage.getBoundingClientRect();
          imageControls.style.display = 'flex';
          imageControls.style.top = (rect.top + window.scrollY - 40) + 'px';
          imageControls.style.left = (rect.left + window.scrollX) + 'px';
          
          // Prevent default drag behavior
          e.preventDefault();
          
          const startX = e.clientX;
          const startY = e.clientY;
          const startLeft = img.offsetLeft;
          const startTop = img.offsetTop;
          
          // Mouse move handler for dragging
          function mouseMoveHandler(e) {
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            
            // Move the image
            img.style.position = 'relative';
            img.style.left = startLeft + dx + 'px';
            img.style.top = startTop + dy + 'px';
          }
          
          // Mouse up handler to stop dragging
          function mouseUpHandler() {
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
          }
          
          document.addEventListener('mousemove', mouseMoveHandler);
          document.addEventListener('mouseup', mouseUpHandler);
        });
        
        // Select image on click (for controls)
        img.addEventListener('click', function(e) {
          e.stopPropagation();
          selectedImage = this;
          
          // Show image controls
          const rect = selectedImage.getBoundingClientRect();
          imageControls.style.display = 'flex';
          imageControls.style.top = (rect.top + window.scrollY - 40) + 'px';
          imageControls.style.left = (rect.left + window.scrollX) + 'px';
          
          // Update width input value
          document.getElementById('image-width').value = selectedImage.width;
        });
      }
    });
  }
  
  // =====================================================
  // TABLE HANDLING FUNCTIONS
  // =====================================================
  
  function initTableHandling() {
    tableBtn.addEventListener('click', function(e) {
      const rect = tableBtn.getBoundingClientRect();
      tableCreator.style.display = 'block';
      tableCreator.style.top = rect.bottom + 5 + 'px';
      tableCreator.style.left = rect.left + 'px';
      e.stopPropagation();
    });
    
    document.getElementById('insert-table-btn').addEventListener('click', function() {
      const rows = parseInt(document.getElementById('table-rows').value) || 3;
      const cols = parseInt(document.getElementById('table-cols').value) || 3;
      
      let tableHTML = '<table class="border-collapse w-full my-2">';
      
      // Create header row
      tableHTML += '<thead><tr>';
      for (let i = 0; i < cols; i++) {
        tableHTML += '<th class="border border-gray-300 p-2">Header ' + (i + 1) + '</th>';
      }
      tableHTML += '</tr></thead>';
      
      // Create table body
      tableHTML += '<tbody>';
      for (let i = 0; i < rows - 1; i++) {
        tableHTML += '<tr>';
        for (let j = 0; j < cols; j++) {
          tableHTML += '<td class="border border-gray-300 p-2">Cell</td>';
        }
        tableHTML += '</tr>';
      }
      tableHTML += '</tbody></table>';
      
      document.execCommand('insertHTML', false, tableHTML);
      tableCreator.style.display = 'none';
      editor.focus();
    });
  }
  
  // =====================================================
  // LINK HANDLING FUNCTIONS
  // =====================================================
  
  function initLinkHandling() {
    linkBtn.addEventListener('click', function(e) {
      const rect = linkBtn.getBoundingClientRect();
      linkEditor.style.display = 'block';
      linkEditor.style.top = rect.bottom + 5 + 'px';
      linkEditor.style.left = rect.left + 'px';
      
      // Get selected text for link text
      const selection = window.getSelection();
      if (selection.toString()) {
        document.getElementById('link-text').value = selection.toString();
      }
      
      e.stopPropagation();
    });
    
    document.getElementById('insert-link-btn').addEventListener('click', function() {
      const url = document.getElementById('link-url').value.trim();
      let text = document.getElementById('link-text').value.trim();
      
      if (url) {
        if (!text) {
          text = url;
        }
        
        // Create link element
        const link = document.createElement('a');
        link.href = url;
        link.textContent = text;
        link.target = '_blank';  // Open in new tab
        
        // Insert the link
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
          selection.deleteFromDocument();
          selection.getRangeAt(0).insertNode(link);
        } else {
          document.execCommand('insertHTML', false, link.outerHTML);
        }
        
        // Clear inputs and hide
        document.getElementById('link-url').value = '';
        document.getElementById('link-text').value = '';
        linkEditor.style.display = 'none';
        
        editor.focus();
      }
    });
  }
  
  // =====================================================
  // LAYOUT HANDLING FUNCTIONS
  // =====================================================
  
  function initLayoutHandling() {
    columnLayoutBtn.addEventListener('click', function(e) {
      const rect = columnLayoutBtn.getBoundingClientRect();
      columnDropdown.style.display = 'block';
      columnDropdown.style.top = rect.bottom + 5 + 'px';
      columnDropdown.style.left = rect.left + 'px';
      e.stopPropagation();
    });
    
    // Apply column layout
    columnDropdown.querySelectorAll('.dropdown-item').forEach(item => {
      item.addEventListener('click', function() {
        const cols = parseInt(this.getAttribute('data-cols'));
        
        let containerHTML = '<div class="flex flex-wrap -mx-2 my-4">';
        
        for (let i = 0; i < cols; i++) {
          let colWidth = 12 / cols;
          containerHTML += `<div class="px-2 w-full md:w-${colWidth}/12"><p>Column ${i + 1} content...</p></div>`;
        }
        
        containerHTML += '</div>';
        
        document.execCommand('insertHTML', false, containerHTML);
        columnDropdown.style.display = 'none';
        editor.focus();
      });
    });
  }
  
  // =====================================================
  // MISC ELEMENT INSERTION FUNCTIONS
  // =====================================================
  
  function initElementInsertions() {
    // Insert divider
    document.getElementById('hr-btn').addEventListener('click', function() {
      document.execCommand('insertHTML', false, '<hr class="my-4 border-t border-gray-300">');
      editor.focus();
    });
    
    // Insert code block
    document.getElementById('code-btn').addEventListener('click', function() {
      document.execCommand('insertHTML', false, '<pre class="bg-gray-100 p-4 rounded my-4"><code>// Your code here</code></pre>');
      editor.focus();
    });
    
    // Insert blockquote
    document.getElementById('quote-btn').addEventListener('click', function() {
      document.execCommand('insertHTML', false, '<blockquote class="border-l-4 border-gray-300 pl-4 italic my-4">Quote text here</blockquote>');
      editor.focus();
    });
    
    // Insert emoji button (placeholder)
    document.getElementById('emoji-btn').addEventListener('click', function() {
      alert('Emoji picker would open here');
    });
  }
  
  // =====================================================
  // PREVIEW, SAVE AND PUBLISH FUNCTIONS
  // =====================================================
  
  function initPreviewAndSave() {
    // Preview
    previewBtn.addEventListener('click', function() {
      previewModal.classList.remove('hidden');
      previewContent.innerHTML = '<h1 class="text-3xl font-bold mb-4">' + articleTitle.value + '</h1>' + editor.innerHTML;
    });
    
    closePreview.addEventListener('click', function() {
      previewModal.classList.add('hidden');
    });
    
    // Save button
    document.getElementById('save-btn').addEventListener('click', function() {
      alert('Article saved as draft! (This is a demo - no actual saving occurs)');
    });
    
    // Publish button
    document.getElementById('publish-btn').addEventListener('click', function() {
      alert('Article published! (This is a demo - no actual publishing occurs)');
    });
  }
  
  // =====================================================
  // SELECTION AND STATE TRACKING
  // =====================================================
  
  function initSelectionTracking() {
    editor.addEventListener('mouseup', updateActiveStyles);
    editor.addEventListener('keyup', updateActiveStyles);
    
    function updateActiveStyles() {
      // Get current selection
      const selection = window.getSelection();
      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        let selectedNode = range.commonAncestorContainer;
        
        // Get the element node (if the selection is in a text node)
        if (selectedNode.nodeType === 3) { // Text node
          selectedNode = selectedNode.parentNode;
        }
        
        // Reset all button active states
        document.querySelectorAll('#text-ribbon button').forEach(btn => {
          btn.classList.remove('bg-gray-200');
        });
        
        // Check and set button states based on current formatting
        if (document.queryCommandState('bold')) {
          document.getElementById('bold-btn').classList.add('bg-gray-200');
        }
        
        if (document.queryCommandState('italic')) {
          document.getElementById('italic-btn').classList.add('bg-gray-200');
        }
        
        if (document.queryCommandState('underline')) {
          document.getElementById('underline-btn').classList.add('bg-gray-200');
        }
        
        if (document.queryCommandState('strikeThrough')) {
          document.getElementById('strikethrough-btn').classList.add('bg-gray-200');
        }
        
        // Update alignment buttons
        if (document.queryCommandState('justifyLeft')) {
          document.getElementById('align-left-btn').classList.add('bg-gray-200');
        }
        
        if (document.queryCommandState('justifyCenter')) {
          document.getElementById('align-center-btn').classList.add('bg-gray-200');
        }
        
        if (document.queryCommandState('justifyRight')) {
          document.getElementById('align-right-btn').classList.add('bg-gray-200');
        }
        
        if (document.queryCommandState('justifyFull')) {
          document.getElementById('align-justify-btn').classList.add('bg-gray-200');
        }
        
        // Update heading/style dropdown
        let styleValue = 'p'; // Default
        
        if (selectedNode) {
          let parentBlock = selectedNode;
          const editorNode = editor.closest('.editor-content') || editor;
          
          // Find the closest block element
          while (parentBlock && 
                 !['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'BLOCKQUOTE', 'PRE'].includes(parentBlock.nodeName) &&
                 parentBlock !== editorNode) {
            parentBlock = parentBlock.parentNode;
          }
          
          if (parentBlock && parentBlock !== editorNode) {
            styleValue = parentBlock.nodeName.toLowerCase();
          }
        }
        
        try {
          document.getElementById('text-style').value = styleValue;
        } catch(e) {
          console.warn("Could not set text-style value:", e);
        }
      }
    }
  }
  
  // =====================================================
  // INITIALIZATION
  // =====================================================
  
  // Initialize all components
  function init() {
    initTabSwitching();
    initClickOutsideHandler();
    initTextFormatting();
    initListHandling();
    initImageHandling();
    initTableHandling();
    initLinkHandling();
    initLayoutHandling();
    initElementInsertions();
    initPreviewAndSave();
    initSelectionTracking();
    
    // Initialize any images already in the editor
    initializeImageDragging();
    
    // Initial focus
    articleTitle.focus();
  }
  
  // Start it up!
  init();
});