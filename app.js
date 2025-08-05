// Exam Photo Resizer - Warm Theme Version (Fixed Dropdown)
// Enhanced with warm colors and improved above-the-fold layout

const examRequirements = {
  "NEET": {
    "name": "NEET (National Eligibility cum Entrance Test)",
    "photo": {"width": 420, "height": 525, "maxSizeKB": 200, "minSizeKB": 10, "dimensions": "3.5 x 4.5 cm"},
    "signature": {"width": 256, "height": 64, "maxSizeKB": 50, "minSizeKB": 10, "dimensions": "2.56 x 0.64 cm"},
    "format": "JPG/JPEG",
    "background": "White"
  },
  "JEE Main": {
    "name": "JEE Main (Joint Entrance Examination)",
    "photo": {"width": 200, "height": 230, "maxSizeKB": 300, "minSizeKB": 10, "dimensions": "3.5 x 4.5 cm"},
    "signature": {"width": 140, "height": 60, "maxSizeKB": 50, "minSizeKB": 10, "dimensions": "3.5 x 1.5 cm"},
    "format": "JPG/JPEG",
    "background": "White or Light"
  },
  "UPSC": {
    "name": "UPSC (Union Public Service Commission)",
    "photo": {"width": 350, "height": 350, "maxSizeKB": 300, "minSizeKB": 20, "dimensions": "3.5 x 4.5 cm"},
    "signature": {"width": 350, "height": 350, "maxSizeKB": 300, "minSizeKB": 20, "dimensions": "3.5 x 1.5 cm"},
    "format": "JPG/JPEG",
    "background": "Plain"
  },
  "SSC CGL": {
    "name": "SSC CGL (Staff Selection Commission)",
    "photo": {"width": 100, "height": 120, "maxSizeKB": 20, "minSizeKB": 10, "dimensions": "3.5 x 4.5 cm"},
    "signature": {"width": 40, "height": 60, "maxSizeKB": 10, "minSizeKB": 5, "dimensions": "6 x 2 cm"},
    "format": "JPG/JPEG",
    "background": "White"
  },
  "GATE": {
    "name": "GATE (Graduate Aptitude Test in Engineering)",
    "photo": {"width": 240, "height": 320, "maxSizeKB": 200, "minSizeKB": 5, "dimensions": "3.5 x 4.5 cm"},
    "signature": {"width": 240, "height": 100, "maxSizeKB": 200, "minSizeKB": 5, "dimensions": "2 x 7 cm"},
    "format": "JPG/JPEG",
    "background": "Plain"
  },
  "CAT": {
    "name": "CAT (Common Admission Test)",
    "photo": {"width": 1200, "height": 1200, "maxSizeKB": 1000, "minSizeKB": 50, "dimensions": "3.5 x 4.5 cm"},
    "signature": {"width": 80, "height": 35, "maxSizeKB": 80, "minSizeKB": 10, "dimensions": "8 x 3.5 cm"},
    "format": "JPG/JPEG",
    "background": "White"
  },
  "IBPS": {
    "name": "IBPS (Institute of Banking Personnel Selection)",
    "photo": {"width": 200, "height": 230, "maxSizeKB": 50, "minSizeKB": 10, "dimensions": "3.5 x 4.5 cm"},
    "signature": {"width": 140, "height": 60, "maxSizeKB": 20, "minSizeKB": 5, "dimensions": "3.5 x 1.5 cm"},
    "format": "JPG/JPEG",
    "background": "White"
  },
  "RRB": {
    "name": "RRB (Railway Recruitment Board)",
    "photo": {"width": 132, "height": 170, "maxSizeKB": 50, "minSizeKB": 10, "dimensions": "3.5 x 4.5 cm"},
    "signature": {"width": 132, "height": 57, "maxSizeKB": 20, "minSizeKB": 5, "dimensions": "3.5 x 1.5 cm"},
    "format": "JPG/JPEG",
    "background": "White"
  },
  "CUET": {
    "name": "CUET (Common University Entrance Test)",
    "photo": {"width": 350, "height": 450, "maxSizeKB": 200, "minSizeKB": 10, "dimensions": "3.5 x 4.5 cm"},
    "signature": {"width": 350, "height": 150, "maxSizeKB": 50, "minSizeKB": 10, "dimensions": "3.5 x 1.5 cm"},
    "format": "JPG/JPEG",
    "background": "White"
  },
  "CLAT": {
    "name": "CLAT (Common Law Admission Test)",
    "photo": {"width": 200, "height": 230, "maxSizeKB": 200, "minSizeKB": 10, "dimensions": "Postcard Size"},
    "signature": {"width": 140, "height": 60, "maxSizeKB": 50, "minSizeKB": 10, "dimensions": "Standard Size"},
    "format": "JPG/JPEG",
    "background": "White"
  }
};

// Global state
let selectedExam = null;
let uploadedImages = { photo: null, signature: null };

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  // console.log('Initializing Exam Photo Resizer (Warm Theme - Fixed)...');
  setTimeout(initializeApp, 100);
});

function initializeApp() {
  // console.log('Setting up warm theme application components...');

  setupExamSelector();
  setupFileUploads();
  setupDragAndDrop();
  setupExamBadges();
  updateUploadSections();

  // console.log('Warm theme application initialized successfully!');
}

// Setup exam selector with enhanced functionality
function setupExamSelector() {
  const examSelect = document.getElementById('examSelect');
  // console.log('Setting up enhanced warm exam selector:', examSelect);

  if (!examSelect) {
    console.error('Exam select element not found');
    return;
  }

  // Ensure the select element is fully functional
  examSelect.style.pointerEvents = 'auto';
  examSelect.style.cursor = 'pointer';
  examSelect.style.zIndex = '10';

  // Multiple event listeners to ensure functionality
  examSelect.addEventListener('change', function(e) {
    const selectedValue = this.value;
    // console.log('Warm exam dropdown changed to:', selectedValue);

    if (selectedValue && examRequirements[selectedValue]) {
      selectExam(selectedValue);
    } else {
      clearExamSelection();
    }
  });

  examSelect.addEventListener('input', function(e) {
    const selectedValue = this.value;
    // console.log('Warm exam dropdown input event:', selectedValue);

    if (selectedValue && examRequirements[selectedValue]) {
      selectExam(selectedValue);
    }
  });

  examSelect.addEventListener('click', function(e) {
    // console.log('Warm exam dropdown clicked');
    this.focus();
  });

  examSelect.addEventListener('focus', function() {
    // console.log('Warm exam dropdown focused');
    this.style.borderColor = '#FF6B35';
  });

  examSelect.addEventListener('blur', function() {
    // console.log('Warm exam dropdown blurred');
    this.style.borderColor = '';
  });

  // Force refresh of the select element
  setTimeout(() => {
    examSelect.style.display = 'none';
    examSelect.offsetHeight; // Trigger reflow
    examSelect.style.display = 'block';
  }, 50);

  // console.log('Enhanced warm exam selector setup complete');
}

// Select exam and show requirements
function selectExam(examKey) {
  // console.log('Selecting exam in warm theme:', examKey);
  selectedExam = examKey;
  const exam = examRequirements[examKey];

  if (!exam) {
    console.error('Exam not found:', examKey);
    return;
  }

  showRequirements(exam);
  updateUploadSections();
  clearPreviews();

  // Update exam badge visual states
  updateExamBadgeStates(examKey);

  showToast(`✅ ${exam.name} selected! Upload your images above.`, 'success');

  // console.log('Warm exam selection complete:', examKey);
}

// Clear exam selection
function clearExamSelection() {
  // console.log('Clearing warm exam selection');
  selectedExam = null;
  hideRequirements();
  updateUploadSections();
  clearPreviews();
  updateExamBadgeStates(null);
}

// Update exam badge visual states
function updateExamBadgeStates(selectedExamKey) {
  const badges = document.querySelectorAll('.exam-badge-warm');
  badges.forEach(badge => {
    const examKey = badge.getAttribute('data-exam') || badge.textContent.trim();
    if (examKey === selectedExamKey) {
      badge.style.transform = 'scale(1.05)';
      badge.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
    } else {
      badge.style.transform = '';
      badge.style.boxShadow = '';
    }
  });
}

// Show requirements
function showRequirements(exam) {
  const requirementsSection = document.getElementById('requirements');
  const photoReqs = document.getElementById('photoReqs');
  const signatureReqs = document.getElementById('signatureReqs');

  // console.log('Showing warm requirements for:', exam.name);

  if (photoReqs) {
    photoReqs.innerHTML = `
      <li><strong>Size:</strong> ${exam.photo.width} × ${exam.photo.height}px</li>
      <li><strong>Dimensions:</strong> ${exam.photo.dimensions}</li>
      <li><strong>File Size:</strong> ${exam.photo.minSizeKB}-${exam.photo.maxSizeKB}KB</li>
      <li><strong>Format:</strong> ${exam.format}</li>
      <li><strong>Background:</strong> ${exam.background}</li>
    `;
  }

  if (signatureReqs) {
    signatureReqs.innerHTML = `
      <li><strong>Size:</strong> ${exam.signature.width} × ${exam.signature.height}px</li>
      <li><strong>Dimensions:</strong> ${exam.signature.dimensions}</li>
      <li><strong>File Size:</strong> ${exam.signature.minSizeKB}-${exam.signature.maxSizeKB}KB</li>
      <li><strong>Format:</strong> ${exam.format}</li>
    `;
  }

  if (requirementsSection) {
    requirementsSection.classList.remove('hidden');
  }
}

// Hide requirements
function hideRequirements() {
  const requirementsSection = document.getElementById('requirements');
  if (requirementsSection) {
    requirementsSection.classList.add('hidden');
  }
}

// Setup file upload functionality
function setupFileUploads() {
  // console.log('Setting up warm file uploads...');

  // Photo upload setup
  const photoBtn = document.getElementById('photoUploadBtn');
  const photoInput = document.getElementById('photoInput');

  if (photoBtn && photoInput) {
    // console.log('Warm photo upload elements found');

    photoBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();

      // console.log('Warm photo button clicked');

      if (!selectedExam) {
        showToast('⚠️ Please select an exam first!', 'error');
        return;
      }

      // console.log('Triggering warm photo file input...');
      photoInput.click();
    });

    photoInput.addEventListener('change', function(e) {
      // console.log('Warm photo file input changed, files:', e.target.files.length);
      if (e.target.files && e.target.files[0]) {
        handleFileUpload(e.target.files[0], 'photo');
      }
    });
  } else {
    console.error('Warm photo upload elements not found:', { photoBtn, photoInput });
  }

  // Signature upload setup
  const signatureBtn = document.getElementById('signatureUploadBtn');
  const signatureInput = document.getElementById('signatureInput');

  if (signatureBtn && signatureInput) {
    // console.log('Warm signature upload elements found');

    signatureBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();

      // console.log('Warm signature button clicked');

      if (!selectedExam) {
        showToast('⚠️ Please select an exam first!', 'error');
        return;
      }

      // console.log('Triggering warm signature file input...');
      signatureInput.click();
    });

    signatureInput.addEventListener('change', function(e) {
      // console.log('Warm signature file input changed, files:', e.target.files.length);
      if (e.target.files && e.target.files[0]) {
        handleFileUpload(e.target.files[0], 'signature');
      }
    });
  } else {
    console.error('Warm signature upload elements not found:', { signatureBtn, signatureInput });
  }

  setupDownloadButtons();

  // console.log('Warm file upload setup complete');
}

// Setup drag and drop functionality
function setupDragAndDrop() {
  const photoArea = document.getElementById('photoUploadArea');
  const signatureArea = document.getElementById('signatureUploadArea');

  if (photoArea) setupDropZone(photoArea, 'photo');
  if (signatureArea) setupDropZone(signatureArea, 'signature');
}

function setupDropZone(dropZone, type) {
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, preventDefaults, false);
    document.body.addEventListener(eventName, preventDefaults, false);
  });

  ['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, () => {
      dropZone.classList.add('drag-over');
    }, false);
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, () => {
      dropZone.classList.remove('drag-over');
    }, false);
  });

  dropZone.addEventListener('drop', function(e) {
    if (!selectedExam) {
      showToast('⚠️ Please select an exam first!', 'error');
      return;
    }

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0], type);
    }
  }, false);
}

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

// Enhanced setup exam badges for quick selection
function setupExamBadges() {
  // console.log('Setting up enhanced warm exam badges...');
  const badges = document.querySelectorAll('.exam-badge-warm');
  // console.log('Found warm exam badges:', badges.length);

  badges.forEach((badge, index) => {
    const examKey = badge.getAttribute('data-exam') || badge.textContent.trim();
    // console.log(`Setting up warm badge ${index}:`, examKey);

    badge.addEventListener('click', function() {
      // console.log('Warm badge clicked:', examKey);

      // Update dropdown to reflect selection
      const examSelect = document.getElementById('examSelect');
      if (examSelect) {
        examSelect.value = examKey;
        // console.log('Warm dropdown updated to:', examKey);

        // Trigger change event manually to ensure sync
        const changeEvent = new Event('change', { bubbles: true });
        examSelect.dispatchEvent(changeEvent);
      }

      // Select the exam (this will also update badge states)
      selectExam(examKey);

      // Smooth scroll to tool section
      const mainTool = document.querySelector('.main-tool-warm');
      if (mainTool) {
        mainTool.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }
    });

    // Add hover effects
    badge.addEventListener('mouseenter', function() {
      if (selectedExam !== examKey) {
        this.style.transform = 'scale(1.02) translateY(-1px)';
      }
    });

    badge.addEventListener('mouseleave', function() {
      if (selectedExam !== examKey) {
        this.style.transform = '';
      }
    });
  });

  // console.log('Enhanced warm exam badges setup complete');
}

// Handle file upload
function handleFileUpload(file, type) {
  // console.log(`Processing warm ${type} file:`, file.name, file.size, file.type);

  if (!file.type.match(/^image\/(jpeg|jpg|png)$/i)) {
    showToast('❌ Please upload JPG, JPEG, or PNG files only.', 'error');
    return;
  }

  if (file.size > 10 * 1024 * 1024) {
    showToast('❌ File too large. Maximum 10MB allowed.', 'error');
    return;
  }

  showModal();

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      // console.log('Warm image loaded:', img.width, 'x', img.height);
      processImage(img, file, type);
    };
    img.onerror = function() {
      console.error('Error loading warm image');
      hideModal();
      showToast('❌ Error loading image. Please try another file.', 'error');
    };
    img.src = e.target.result;
  };
  reader.onerror = function() {
    console.error('Error reading warm file');
    hideModal();
    showToast('❌ Error reading file. Please try again.', 'error');
  };
  reader.readAsDataURL(file);
}

// Process and resize image
function processImage(originalImg, originalFile, type) {
  try {
    const requirements = examRequirements[selectedExam][type];
    // console.log('Processing warm image with requirements:', requirements);

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = requirements.width;
    canvas.height = requirements.height;

    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(originalImg, 0, 0, requirements.width, requirements.height);

    canvas.toBlob(function(blob) {
      if (!blob) {
        console.error('Failed to create warm blob');
        hideModal();
        showToast('❌ Error processing image. Please try again.', 'error');
        return;
      }

      // console.log('Warm image processed successfully, blob size:', blob.size);

      const processedUrl = URL.createObjectURL(blob);
      const originalSizeKB = Math.round(originalFile.size / 1024);
      const processedSizeKB = Math.round(blob.size / 1024);

      uploadedImages[type] = {
        original: {
          img: originalImg,
          file: originalFile,
          sizeKB: originalSizeKB
        },
        processed: {
          url: processedUrl,
          blob: blob,
          width: requirements.width,
          height: requirements.height,
          sizeKB: processedSizeKB
        }
      };

      showPreview(type);
      hideModal();

      const uploadArea = document.getElementById(`${type}UploadArea`);
      if (uploadArea) {
        uploadArea.classList.add('success');
      }

      showToast(`✅ ${type.charAt(0).toUpperCase() + type.slice(1)} processed successfully!`, 'success');

    }, 'image/jpeg', 0.9);

  } catch (error) {
    console.error('Error processing warm image:', error);
    hideModal();
    showToast('❌ Error processing image. Please try again.', 'error');
  }
}

// Show image preview
function showPreview(type) {
  const data = uploadedImages[type];
  const previewSection = document.getElementById(`${type}Preview`);

  if (!data || !previewSection) {
    console.error('Warm preview data or section not found:', { data, previewSection });
    return;
  }

  // console.log('Showing warm preview for:', type);

  const originalImg = document.getElementById(`original${type.charAt(0).toUpperCase() + type.slice(1)}`);
  const originalInfo = document.getElementById(`original${type.charAt(0).toUpperCase() + type.slice(1)}Info`);

  if (originalImg) {
    originalImg.src = data.original.img.src;
    originalImg.alt = `Original ${type}`;
  }

  if (originalInfo) {
    originalInfo.innerHTML = `
      ${data.original.img.width} × ${data.original.img.height}px<br>
      Size: ${data.original.sizeKB}KB
    `;
  }

  const processedImg = document.getElementById(`resized${type.charAt(0).toUpperCase() + type.slice(1)}`);
  const processedInfo = document.getElementById(`resized${type.charAt(0).toUpperCase() + type.slice(1)}Info`);

  if (processedImg) {
    processedImg.src = data.processed.url;
    processedImg.alt = `Resized ${type}`;
  }

  if (processedInfo) {
    processedInfo.innerHTML = `
      ${data.processed.width} × ${data.processed.height}px<br>
      Size: ${data.processed.sizeKB}KB
    `;
  }

  const downloadBtn = document.getElementById(`download${type.charAt(0).toUpperCase() + type.slice(1)}`);
  if (downloadBtn) {
    downloadBtn.disabled = false;
  }

  previewSection.classList.remove('hidden');

  // console.log('Warm preview shown for:', type);
}

// Setup download buttons
function setupDownloadButtons() {
  const photoDownloadBtn = document.getElementById('downloadPhoto');
  const signatureDownloadBtn = document.getElementById('downloadSignature');

  if (photoDownloadBtn) {
    photoDownloadBtn.addEventListener('click', () => downloadImage('photo'));
  }

  if (signatureDownloadBtn) {
    signatureDownloadBtn.addEventListener('click', () => downloadImage('signature'));
  }
}

// Download processed image
function downloadImage(type) {
  const data = uploadedImages[type];
  if (!data || !data.processed) return;

  const link = document.createElement('a');
  link.href = data.processed.url;
  link.download = `${selectedExam}_${type}_${Date.now()}.jpg`;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast(`⬇️ ${type.charAt(0).toUpperCase() + type.slice(1)} downloaded successfully!`, 'success');
}

// Update upload sections
function updateUploadSections() {
  const photoSection = document.getElementById('photoSection');
  const signatureSection = document.getElementById('signatureSection');

  if (selectedExam) {
    if (photoSection) photoSection.classList.remove('disabled');
    if (signatureSection) signatureSection.classList.remove('disabled');
  } else {
    if (photoSection) photoSection.classList.add('disabled');
    if (signatureSection) signatureSection.classList.add('disabled');
  }
}

// Clear all previews
function clearPreviews() {
  ['photo', 'signature'].forEach(type => {
    const preview = document.getElementById(`${type}Preview`);
    const uploadArea = document.getElementById(`${type}UploadArea`);
    const downloadBtn = document.getElementById(`download${type.charAt(0).toUpperCase() + type.slice(1)}`);

    if (preview) preview.classList.add('hidden');
    if (uploadArea) {
      uploadArea.classList.remove('success', 'error');
    }
    if (downloadBtn) downloadBtn.disabled = true;

    if (uploadedImages[type] && uploadedImages[type].processed) {
      URL.revokeObjectURL(uploadedImages[type].processed.url);
    }
  });

  uploadedImages = { photo: null, signature: null };
}

// Enhanced warm toast notification system
function showToast(message, type = 'success') {
  // console.log('Showing enhanced warm toast:', message, type);

  const toastId = type === 'success' ? 'successToast' : 'errorToast';
  const toast = document.getElementById(toastId);

  if (!toast) {
    console.error('Warm toast element not found:', toastId);
    return;
  }

  const messageElement = toast.querySelector('.toast-message');
  if (messageElement) {
    messageElement.textContent = message;
  }

  toast.classList.remove('hidden');
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 300);
  }, 4500);
}

// Warm modal functions
function showModal() {
  const modal = document.getElementById('processingModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('show');
  }
}

function hideModal() {
  const modal = document.getElementById('processingModal');
  if (modal) {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 300);
  }
}

// Cleanup on page unload
window.addEventListener('beforeunload', function() {
  Object.values(uploadedImages).forEach(data => {
    if (data && data.processed && data.processed.url) {
      URL.revokeObjectURL(data.processed.url);
    }
  });
});

// Debug logging
// console.log('Enhanced Warm Exam Photo Resizer application loaded successfully!');