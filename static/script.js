function addLog(msg, type = '') {
    const feed = document.getElementById('log-feed');
    if (!feed) return;
    const entry = document.createElement('div');
    entry.className = `log-entry ${type}`;
    const time = new Date().toLocaleTimeString('en-GB');
    entry.textContent = `[${time}] ${msg}`;
    feed.appendChild(entry);
    feed.scrollTop = feed.scrollHeight;
}

async function loadUsers() {
    const tbody = document.getElementById('usersTable');
    const badge = document.getElementById('record-badge');

    tbody.innerHTML = `
        <tr>
            <td colspan="6" class="boot-cell">
                <div class="boot-msg">
                    <span class="spin">◐</span>
                    QUERYING DATABASE...
                </div>
            </td>
        </tr>`;

    badge.textContent = 'SYNCING...';
    addLog('Executing query on agent registry...', '');

    try {
        const res = await fetch('/users');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const users = await res.json();

        const total = users.length;
        const withHandle = users.filter(u => u.username && u.username !== '-').length;
        const anon = total - withHandle;
        const latest = total > 0 ? users[total - 1] : null;

        // Update metrics
        document.getElementById('m-total').textContent = String(total).padStart(3, '0');
        document.getElementById('m-handle').textContent = String(withHandle).padStart(3, '0');
        document.getElementById('m-anon').textContent = String(anon).padStart(3, '0');

        // Update last agent
        if (latest) {
            document.getElementById('last-agent').innerHTML = `
                <div class="agent-name">${latest.first_name} ${latest.last_name !== '-' ? latest.last_name : ''}</div>
                <div class="agent-sub">LAST REGISTERED AGENT</div>
            `;
        }

        badge.textContent = `${total} RECORD${total !== 1 ? 'S' : ''} FOUND`;
        addLog(`Query complete. ${total} agents retrieved.`, 'success');

        if (total === 0) {
            tbody.innerHTML = `<tr><td colspan="6" class="empty-msg">[ NO AGENTS IN REGISTRY ]</td></tr>`;
            addLog('Registry is empty.', 'warn');
            return;
        }

        tbody.innerHTML = '';
        users.forEach((user, i) => {
            const tr = document.createElement('tr');
            tr.style.animationDelay = `${i * 0.04}s`;
            tr.innerHTML = `
                <td>#${String(user.id).padStart(4, '0')}</td>
                <td>${user.first_name}</td>
                <td>${user.last_name !== '-' ? user.last_name : '<span class="dim">NULL</span>'}</td>
                <td>${user.username !== '-' ? '@' + user.username : '<span class="dim">ANONYMOUS</span>'}</td>
                <td>${user.created_at}</td>
                <td><span class="status-cell"><span class="dot green"></span>ACTIVE</span></td>
            `;
            tbody.appendChild(tr);
        });

        addLog(`Rendered ${total} agent rows.`, 'success');

    } catch (err) {
        tbody.innerHTML = `<tr><td colspan="6" class="error-msg">⚠ CONNECTION FAILED: ${err.message}</td></tr>`;
        badge.textContent = 'ERROR';
        addLog(`ERROR: ${err.message}`, 'err');
    }
}

// Boot sequence logs
setTimeout(() => addLog('Modules loaded successfully.', 'success'), 600);
setTimeout(() => addLog('Tunnel established. Latency: 2ms', 'success'), 1100);
setTimeout(() => addLog('Database relay connected.', 'success'), 1600);
setTimeout(() => loadUsers(), 2000);