<template>
  <footer class="modern-footer" role="contentinfo" aria-label="Site footer">
    <v-container>
      <div class="footer-content">
        <div class="footer-main">
          <div class="footer-brand">
            <h3 class="footer-name headland-one">Pratik Amatya</h3>
            <p class="footer-tagline inter">Full Stack Developer</p>
          </div>

          <div class="footer-social">
            <a
              href="mailto:pratikamatya10@gmail.com"
              target="_blank"
              class="social-link email-link touch-target"
              aria-label="Send email to pratikamatya10@gmail.com"
              rel="noopener noreferrer"
            >
              <v-icon size="24" class="social-icon" aria-hidden="true"
                >mdi-email</v-icon
              >
            </a>
            <a
              href="https://github.com/PratikAmatya"
              target="_blank"
              class="social-link github-link touch-target"
              aria-label="Visit GitHub profile"
              rel="noopener noreferrer"
            >
              <v-icon size="24" class="social-icon" aria-hidden="true"
                >mdi-github</v-icon
              >
            </a>
            <a
              href="https://www.linkedin.com/in/pratikamatya/"
              target="_blank"
              class="social-link linkedin-link touch-target"
              aria-label="Visit LinkedIn profile"
              rel="noopener noreferrer"
            >
              <v-icon size="24" class="social-icon" aria-hidden="true"
                >mdi-linkedin</v-icon
              >
            </a>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="footer-divider"></div>
          <div class="footer-copyright">
            <span class="copyright-text inter">
              © {{ currentYear }} Pratik Amatya. Built with Vue.js & Vuetify
            </span>
          </div>
        </div>
      </div>
    </v-container>
  </footer>
</template>

<script setup>
import { computed } from "vue";

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.modern-footer {
  background: linear-gradient(135deg, #171719 0%, #2a2a2a 100%);
  color: white;
  padding: 3rem 0 2rem;
  margin-top: 4rem;
  position: relative;
  overflow: hidden;
}

.modern-footer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #ffef5c 0%, #f0e04a 50%, #ffef5c 100%);
}

.footer-content {
  max-width: 800px;
  margin: 0 auto;
}

.footer-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.footer-brand {
  flex: 1;
}

.footer-name {
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffef5c;
  margin-bottom: 0.25rem;
  text-shadow: 0 2px 4px rgba(255, 239, 92, 0.3);
}

.footer-tagline {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
}

.footer-social {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  position: relative;
  overflow: hidden;
  will-change: transform;
  transform: translate3d(0, 0, 0);
}

.social-link::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s ease;
}

.social-link:hover::before {
  left: 100%;
}

.social-link:hover {
  transform: translate3d(0, -3px, 0);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 239, 92, 0.5);
  will-change: auto;
}

.social-icon {
  color: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
  z-index: 1;
}

.email-link:hover .social-icon {
  color: #ea4335;
}

.github-link:hover .social-icon {
  color: #ffffff;
}

.linkedin-link:hover .social-icon {
  color: #0077b5;
}

.footer-bottom {
  text-align: center;
}

.footer-divider {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  margin-bottom: 1.5rem;
}

.copyright-text {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
}

/* Responsive Design */
@media (max-width: 599px) {
  .modern-footer {
    padding: 2.5rem 0 1.5rem;
    margin-top: 3rem;
  }

  .footer-main {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .footer-name {
    font-size: 1.5rem;
  }

  .footer-tagline {
    font-size: 0.9rem;
  }

  .footer-social {
    gap: 0.75rem;
  }

  .social-link {
    width: 44px;
    height: 44px;
    border-radius: 10px;
  }

  .social-icon {
    font-size: 20px;
  }

  .copyright-text {
    font-size: 0.8rem;
  }
}

@media (min-width: 600px) and (max-width: 959px) {
  .modern-footer {
    padding: 2.75rem 0 1.75rem;
    margin-top: 3.5rem;
  }

  .footer-main {
    margin-bottom: 1.75rem;
  }

  .footer-name {
    font-size: 1.6rem;
  }
}

@media (min-width: 960px) {
  .modern-footer {
    padding: 3.5rem 0 2.5rem;
    margin-top: 5rem;
  }

  .footer-social {
    gap: 1.25rem;
  }

  .social-link {
    width: 52px;
    height: 52px;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .social-link,
  .social-icon {
    transition: none;
    will-change: auto !important;
  }

  .social-link:hover {
    transform: translate3d(0, 0, 0) !important;
  }

  .social-link::before {
    display: none;
  }
}
</style>
