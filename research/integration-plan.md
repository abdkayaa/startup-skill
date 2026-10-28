# v2 Entegrasyon Planı

Kapsam: `research/synthesis.md` §2'deki 10 ilke → `skills/startup/references/*.md`. SKILL.md'nin gövdesi değişmez, sadece bir satırlık sources pointer'ı eklenir. Referanslar İngilizce kalır. Her ekleme 1–3 satır ve sonunda kaynak etiketi taşır, örn. `(Ries, Lean Startup)`.

Bütçe: mevcut referanslar ~1.8k kelime. Ek ≤ ~600 kelime (≈ +0.8k token) + sources.md ~350 kelime.

## Dosya bazında değişiklik

| Dosya | Mevcut bölüm | Ekleme |
|---|---|---|
| scope-discipline.md | The Core Loop öncesi | **Riskiest assumption first**: ilk 2 saatte "bu yanlışsa proje çöker" varsayımını yaz, KEEP listesinin ilk maddesi onu test etsin (#1) |
| problem-customer.md | 15-minute validation | **Bad data filter**: iltifat, genelleme ("genelde"), gelecek vaadi = sinyal değil. **Commitment signal**: e-posta, pilot, ön ödeme, takvim daveti (#2) |
| business-model.md | Revenue model menu sonrası | **First 100 customers — one channel** (Bullseye 3→1) (#3), **5 parts check** (value/marketing/sales/delivery/finance, boş olan = zayıflık) (#5), **Default alive one-liner** (#6), **Lean Canvas** opsiyonel 9 kutu özet şablonu (#8) |
| market-competition.md | Differentiation sentence | Fark cümlesi **ölçülebilir** olmalı (süre/maliyet/adım), marjinal iyileştirme kırmızı bayrak (#4) |
| pitch-demo.md | 3-minute structure | Problem slaytına **"what most people miss"** (secret) satırı (#10). Jury simulation'a **impact** kriteri ve **ön eleme** uyarısı (ilk 60 sn'de net olmalı) (#7) |
| scorecard.md | kriter tablosu | **Impact** satırı (Devpost/MLH) (#7), Quick check'e "riskiest assumption test edildi mi?" ve "kanal tek mi?" soruları |
| time-boxing.md | Checkpoints | **Pivot gate**: ~%35 noktasında tek karar (validasyon zayıfsa segment/problem değiştir), sonrası feature freeze (#9). Son bloğa 1–2 saat kanal mini testi (Traction %50'nin küçültülmüşü) |
| **Yeni:** references/sources.md | — | bibliography.md'den türetilmiş kısa kaynakça, ilke → kaynak eşlemesi |
| SKILL.md | references listesi | `sources.md` için 1 satır: "only load when the user asks where a rule comes from" |

## Kurallar
- Alıntı yok, kendi cümlelerimiz. `[YORUM]` olan uyarlamalar kaynağa atfedilmez.
- Önce doğrulanmamış iddialar (YC library, MLH, Devpost default kriterleri) için tarayıcıyla kontrol. Doğrulanamayan, "commonly used" diye yazılır.
- Çelişki çözümleri (synthesis §1) ilgili dosyaya tek satır olarak girer: Mom Test 5 görüşme (problem-customer), pivot gate vs freeze (time-boxing).

## Sıra
1. YC/MLH/Devpost doğrulaması (tarayıcı).
2. 7 referans dosyasını düzenle + sources.md + SKILL.md satırı.
3. `wc -w` ile bütçe kontrolü, dist/ yeniden üret (mevcut build adımıyla).
4. Bir örnek fikirle `/startup check` ve `/startup jury` çalıştırıp yeni maddelerin çıktıda göründüğünü kontrol et.
5. Diff'i göster. Commit kullanıcı onayıyla.
