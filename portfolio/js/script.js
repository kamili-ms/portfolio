// Funções para responsividade e componentes Bootstrap

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 DOM carregado - script.js funcionando');
    console.log('📍 URL atual:', window.location.href);
    
    // ==================================================
    // INICIALIZAÇÃO DE TOOLTIPS DO BOOTSTRAP
    // ==================================================
    
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // ==================================================
    // FORMULÁRIO DE CONTATO - CÓDIGO PRINCIPAL (ATUALIZADO)
    // ==================================================
    
    const formContato = document.getElementById('form-contato');

    if (formContato) {
        console.log('✅ Formulário de contato encontrado');
        
        formContato.addEventListener('submit', function(e) {
            console.log('📝 Formulário submetido');
            
            e.preventDefault();
            
            if (!formContato.checkValidity()) {
                console.log('❌ Formulário inválido');
                e.stopPropagation();
                formContato.classList.add('was-validated');
                return;
            }
            
            console.log('✅ Formulário válido, enviando dados...');
            
            const formData = new FormData(formContato);
            
            // Mostrar dados no console
            for (let [key, value] of formData.entries()) {
                console.log('📦 Dado:', key + ': ' + value);
            }
            
            const submitBtn = formContato.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm"></span> Enviando...';
            submitBtn.disabled = true;
            
            // ==================================================
            // ENVIO AJAX - CAMINHO CORRETO
            // ==================================================
            
            const phpPath = 'php/processa_contato.php';
            console.log('📡 Enviando para:', phpPath);
            
            fetch(phpPath, {
                method: 'POST',
                body: formData
            })
            .then(response => {
                console.log('📨 Resposta recebida. Status:', response.status);
                
                if (!response.ok) {
                    // Se for erro 404, o arquivo não existe
                    if (response.status === 404) {
                        throw new Error('Arquivo PHP não encontrado (404). Verifique o caminho.');
                    }
                    throw new Error(`Erro HTTP: ${response.status} - ${response.statusText}`);
                }
                
                return response.text().then(text => {
                    console.log('📝 Resposta bruta:', text);
                    try {
                        const data = JSON.parse(text);
                        return data;
                    } catch (e) {
                        console.error('❌ Resposta não é JSON válido:', text);
                        throw new Error('Resposta inválida do servidor: ' + text.substring(0, 100));
                    }
                });
            })
            .then(data => {
                console.log('✅ Dados processados:', data);
                
                if (data.success) {
                    console.log('🎉 Mensagem enviada com sucesso');
                    
                    // Mostrar modal de sucesso
                    const successModal = new bootstrap.Modal(document.getElementById('successModal'));
                    successModal.show();
                    
                    // Limpar formulário
                    formContato.reset();
                    formContato.classList.remove('was-validated');
                    
                    // Remover classes de validação dos campos
                    formContato.querySelectorAll('.is-valid, .is-invalid').forEach(field => {
                        field.classList.remove('is-valid', 'is-invalid');
                    });
                } else {
                    console.log('❌ Erro do servidor:', data.message);
                    alert('Erro: ' + data.message);
                }
            })
            .catch(error => {
                console.error('💥 Erro completo:', error);
                
                // Mensagens específicas para diferentes tipos de erro
                if (error.message.includes('Failed to fetch')) {
                    alert('❌ Erro de conexão!\n\nVerifique se:\n• O servidor XAMPP está rodando\n• Os arquivos PHP estão na pasta /php/\n• Você está acessando via: http://localhost/portfolio/contato.html');
                } else if (error.message.includes('404')) {
                    alert('❌ Arquivo não encontrado!\n\nVerifique se o arquivo php/processa_contato.php existe na pasta correta.');
                } else if (error.message.includes('JSON')) {
                    alert('❌ Erro no servidor!\n\nO servidor retornou uma resposta inválida. Verifique os logs do PHP.');
                } else {
                    alert('❌ Erro ao enviar mensagem: ' + error.message);
                }
            })
            .finally(() => {
                // Restaurar botão
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            });
        });
        
        // Validação em tempo real
        formContato.querySelectorAll('input, textarea').forEach(field => {
            field.addEventListener('blur', function() {
                if (this.checkValidity()) {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                } else {
                    this.classList.remove('is-valid');
                    this.classList.add('is-invalid');
                }
            });
        });
    } else {
        console.log('ℹ️ Formulário de contato não encontrado nesta página');
    }

    // ==================================================
    // SCROLL SUAVE PARA LINKS INTERNOS
    // ==================================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ==================================================
    // NAVEGAÇÃO ATIVA - DESTAQUE DO MENU ATUAL
    // ==================================================
    
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('.navbar-nav .nav-link');
    menuItems.forEach(item => {
        if (item.href === currentLocation) {
            item.classList.add('active');
        }
    });

    // ==================================================
    // EFEITO PARALLAX PARA BACKGROUND
    // ==================================================
    
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                const scrolled = window.pageYOffset;
                const parallax = document.querySelector('.hero-section-with-bg');
                if (parallax) {
                    parallax.style.transform = `translateY(${scrolled * 0.4}px)`;
                }
                ticking = false;
            });
            ticking = true;
        }
    });

    // ==================================================
    // ANIMAÇÕES DE ENTRADA (INTERSECTION OBSERVER)
    // ==================================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                if (entry.target.parentElement.classList.contains('row')) {
                    const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card-custom, .project-card').forEach(element => {
        observer.observe(element);
    });

    // ==================================================
    // BOTÃO VOLTAR AO TOPO
    // ==================================================
    
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '↑';
    backToTopButton.className = 'back-to-top btn btn-primary';
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        opacity: 0;
        transition: opacity 0.3s;
        z-index: 1000;
        display: none;
    `;
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.opacity = '0';
            setTimeout(() => {
                if (window.pageYOffset <= 300) {
                    backToTopButton.style.display = 'none';
                }
            }, 300);
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ==================================================
    // DETECÇÃO DE TAMANHO DE TELA (RESPONSIVIDADE)
    // ==================================================
    
    function handleResize() {
        const width = window.innerWidth;
        document.body.classList.remove('mobile-view', 'tablet-view', 'desktop-view');
        if (width < 768) {
            document.body.classList.add('mobile-view');
        } else if (width < 992) {
            document.body.classList.add('tablet-view');
        } else {
            document.body.classList.add('desktop-view');
        }
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    // ==================================================
    // INICIALIZAÇÃO FINAL DOS COMPONENTES
    // ==================================================
    
    initBootstrapComponents();
    updateYear();
    
    console.log('✅ Todos os componentes inicializados com sucesso!');
});

// ==================================================
// FUNÇÕES GLOBAIS
// ==================================================

function initBootstrapComponents() {
    // Inicializar popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    const popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });

    // Inicializar toasts
    const toastElList = [].slice.call(document.querySelectorAll('.toast'));
    const toastList = toastElList.map(function(toastEl) {
        return new bootstrap.Toast(toastEl);
    });
}

function updateYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Função para mostrar notificações
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
    `;
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    document.body.appendChild(notification);
    
    // Auto-remover após 5 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

console.log('⭐ JavaScript carregado com sucesso!');