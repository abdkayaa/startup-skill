# /startup — Hackathon Founder Lens

> Everyone at a hackathon uses AI to build the **product**. This skill makes AI evaluate the **startup**.

[🇹🇷 Türkçe](#türkçe) · [🇬🇧 English](#english)

---

## Türkçe

Hackathon bir girişimcilik simülasyonudur: kısa sürede bir konu, bir ürün ve bir sunum. Yapay zekâ genelde sadece kod yazmak için kullanılır; oysa bir startup'ı ayakta tutan şey ürünün etrafındaki katmanlardır. Kapsamı dondurmak, kimin ödeyeceğini bulmak, rakiplerden ayrışmak ve ikna edici bir sunum hazırlamak bu katmanlardan bazıları.

`/startup` yazdığınızda model **sizin asistanınız olmaktan çıkar** ve **tarafsız üçüncü bir göz** olarak çalışır. Deneyimli bir kurucu, bir yatırımcı ve bir jüri üyesinin bakışını birleştirir:

- Fikri değil girişimi değerlendirir; övgüyle açmaz, ölümcül hataları yumuşatmaz.
- Problemi ve hedef müşteriyi keskinleştirir ("herkes" kabul edilmez).
- **Kapsam disiplini** kurar: KEEP / FAKE / CUT / LATER tabloları, feature-freeze saati.
- **Gelir modeli** çıkarır: kim öder, ne kadar öder, kaba hesap. Sonuçta bunun iş mi hobi mi olduğunu söyler.
- Rakipleri ve ayrışmayı haritalar. "Rakibimiz yok" cevabını kabul etmez.
- Sunum akışını, demo senaryosunu ve jüri sorularını hazırlar.
- Yanlışları listeler ve kalan saate göre önceliklendirilmiş bir aksiyon planı verir.

### Komutlar
| Komut | Ne yapar |
|---|---|
| `/startup` | Tam denetim: karar, 8 başlık, skor kartı, aksiyon planı |
| `/startup idea` | Problem, müşteri, tema uyumu |
| `/startup scope` | MVP kesimi, feature freeze |
| `/startup money` | İş/gelir modeli, fiyat, birim ekonomi |
| `/startup market` | Rakipler, ayrışma, moat |
| `/startup pitch` | 3 dakikalık sunum + demo senaryosu |
| `/startup jury` | Acımasız jüri simülasyonu (10 soru) |
| `/startup plan` | Kalan süreye göre saat saat plan |
| `/startup check` | 5 dakikalık ara sağlık kontrolü |
| `/startup off` | Normal moda dön |

---

## English

Type `/startup` and the model stops being your cheerleader. It acts as a **neutral third party** (part founder, part investor, part jury) and audits the problem, customer, scope, business model, competition, demo and pitch. It also gives you a time-boxed action plan for the hours you have left.

---

## Installation / Kurulum

### Claude Code
```bash
git clone https://github.com/<you>/startup-skill
cp -r startup-skill/skills/startup ~/.claude/skills/
```
Windows (PowerShell):
```powershell
Copy-Item -Recurse startup-skill\skills\startup $env:USERPROFILE\.claude\skills\
```
Then type `/startup` in any session.

### DeepSeek, ChatGPT, OpenRouter, or any other harness
Harnesses without native skill support should use the bundled single-file prompt:
1. `node scripts/build.mjs` (it generates `dist/startup-system-prompt.md`; a pre-built copy is committed)
2. Paste it as the **system prompt**, custom instructions, or the first message.
3. Type `/startup`.

Agent harnesses that read `AGENTS.md` or skill folders (Codex, OpenCode, Cursor, etc.) can point to `skills/startup/` directly.

## Structure
```
skills/startup/
  SKILL.md                 # role, stance, modes, output format
  references/              # loaded per mode (progressive disclosure)
    problem-customer.md
    scope-discipline.md
    business-model.md
    market-competition.md
    pitch-demo.md
    time-boxing.md
    scorecard.md
dist/startup-system-prompt.md   # single-file bundle for other LLMs
scripts/build.mjs
```

## Contributing
PRs welcome, especially new jury questions, revenue models and real hackathon post-mortems. Edit files under `skills/startup/`, then run `node scripts/build.mjs`.

## License
MIT
