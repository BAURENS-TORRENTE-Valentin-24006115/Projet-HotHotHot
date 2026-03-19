class TabsManual {
    constructor(groupNode) {
        this.A_tablistNode = groupNode;

        this.A_tabs = [];

        this.A_firstTab = null;
        this.A_lastTab = null;

        this.A_tabs = Array.from(this.A_tablistNode.querySelectorAll('[role=tab]'));
        this.A_tabpanels = [];

        for (let I_i = 0; I_i < this.A_tabs.length; I_i += 1) {
            const A_tab = this.A_tabs[I_i];
            const A_tabpanel = document.getElementById(A_tab.getAttribute('aria-controls'));

            A_tab.tabIndex = -1;
            A_tab.setAttribute('aria-selected', 'false');
            this.A_tabpanels.push(A_tabpanel);

            A_tab.addEventListener('keydown', this.onKeydown.bind(this));
            A_tab.addEventListener('click', this.onClick.bind(this));

            if (!this.A_firstTab) {
                this.A_firstTab = A_tab;
            }
            this.A_lastTab = A_tab;
        }

        this.setSelectedTab(this.A_firstTab);
    }

    setSelectedTab(A_currentTab) {
        for (let I_i = 0; I_i < this.A_tabs.length; I_i += 1) {
            const A_tab = this.A_tabs[I_i];
            if (A_currentTab === A_tab) {
                A_tab.setAttribute('aria-selected', 'true');
                A_tab.removeAttribute('tabindex');
                this.A_tabpanels[I_i].classList.remove('is-hidden');
            } else {
                A_tab.setAttribute('aria-selected', 'false');
                A_tab.tabIndex = -1;
                this.A_tabpanels[I_i].classList.add('is-hidden');
            }
        }
    }

    moveFocusToTab(A_currentTab) {
        A_currentTab.focus();
    }

    moveFocusToPreviousTab(A_currentTab) {
        let I_index;

        if (A_currentTab === this.A_firstTab) {
            this.moveFocusToTab(this.A_lastTab);
        } else {
            I_index = this.A_tabs.indexOf(A_currentTab);
            this.moveFocusToTab(this.A_tabs[I_index - 1]);
        }
    }

    moveFocusToNextTab(A_currentTab) {
        let I_index;

        if (A_currentTab === this.A_lastTab) {
            this.moveFocusToTab(this.A_firstTab);
        } else {
            I_index = this.A_tabs.indexOf(A_currentTab);
            this.moveFocusToTab(this.A_tabs[I_index + 1]);
        }
    }

    /* EVENT HANDLERS */

    onKeydown(O_event) {
        let O_tgt = O_event.currentTarget,
            B_flag = false;

        switch (O_event.key) {
            case 'ArrowLeft':
                this.moveFocusToPreviousTab(O_tgt);
                B_flag = true;
                break;

            case 'ArrowRight':
                this.moveFocusToNextTab(O_tgt);
                B_flag = true;
                break;

            case 'Home':
                this.moveFocusToTab(this.A_firstTab);
                B_flag = true;
                break;

            case 'End':
                this.moveFocusToTab(this.A_lastTab);
                B_flag = true;
                break;

            default:
                break;
        }

        if (B_flag) {
            O_event.stopPropagation();
            O_event.preventDefault();
        }
    }

    // Since this example uses buttons for the tabs, the click onr also is activated
    // with the space and enter keys
    onClick(O_event) {
        this.setSelectedTab(O_event.currentTarget);
    }
}