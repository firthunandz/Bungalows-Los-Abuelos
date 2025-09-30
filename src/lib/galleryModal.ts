export function initGalleryModal(options?: { overlayId?: string; imageId?: string; captionId?: string; closeId?: string }) {
  const overlayId = options?.overlayId ?? 'gallery-overlay';
  const imageId = options?.imageId ?? 'gallery-image';
  const captionId = options?.captionId ?? 'modal-title';
  const closeId = options?.closeId ?? 'gallery-close';

  const overlay = document.getElementById(overlayId);
  const modalImage = document.getElementById(imageId);
  const modalCaption = document.getElementById(captionId);
  const closeBtn = document.getElementById(closeId);

  function openModal(src: string, alt: string) {
    if (!overlay || !modalImage || !modalCaption) return;
    if (modalImage instanceof HTMLImageElement) {
      modalImage.src = src;
      modalImage.alt = alt;
    }
    modalCaption.textContent = alt;
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!overlay || !modalImage) return;
    overlay.classList.add('hidden');
    if (modalImage instanceof HTMLImageElement) {
      modalImage.src = '';
    }
    document.body.style.overflow = '';
  }

  document.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;

    const link = target.closest('a[href][data-index]');
    if (link) {
      e.preventDefault();
      const img = link.querySelector('img');
      if (img instanceof HTMLImageElement) openModal(img.src, img.alt);
      return;
    }

    if (overlay && e.target === overlay) {
      closeModal();
      return;
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', () => closeModal());
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}


