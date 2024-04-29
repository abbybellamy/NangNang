import json
import re
with open("kanji.txt", "r",encoding='utf-8') as f:
    source = f.read().split("\n")


start = re.compile(r"(?P<rank>\d+):\s(?P<kanji>\w+)")
dissect_with_kanji = re.compile(r"(?P<dissect>[^)\s\n]+)[^\S\n]*\"(?P<ddef>[^\"\n]*)\"")
dissect_without_kanji = re.compile(r"\s{2}\"(?P<ddef>[^\"]*)\"")
standard_defintion = re.compile(r"\s*\'(?P<def>[^\']*)\'")

j = {}
# kanji obj = {rank, base, kanji, dissection, pos}
for i in range(len(source)):
    if start.match(source[i]):
        kanji = start.match(source[i]).group("kanji")
        rank = start.match(source[i]).group("rank")
        j[kanji] = {"rank": rank}
        i += 1
        if "base" in source[i]:
            j[kanji]["base"] = "True"
            i += 1
        else:
            j[kanji]["base"] = "False"
        k = 0
        dissect = {}
        for (dd, ddef) in dissect_with_kanji.findall(source[i]):
            dissect[dd] = ddef
            k += 1
        if k > 0:
            dissect_mega = []
            for key in dissect:
                dissect_temp = []
                dissect_temp.append(key)
                dissect_temp.append(dissect[key])
                dissect_mega.append(dissect_temp)
            dissect = dissect_mega
        if k == 0:
            for group in dissect_without_kanji.findall(source[i]):
                j[kanji]["dissect"] = group
                k += 1
        else:
            if k > 0:
                j[kanji]["dissect"] = dissect
        if k > 0:
            i += 1
        if standard_defintion.match(source[i]):
            j[kanji]["def"] = standard_defintion.match(source[i]).group("def")
        i += 1
        try:
            l = source[i].strip()
            if l != "":
                j[kanji]["pos"] = l
        except:
            break

with open("kanji.json", "w") as f:
    json.dump(j, f, indent=4)