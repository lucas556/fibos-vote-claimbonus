# FIBOS设置投票权限
## 投票权限
### 设置投票权限给公钥
fibosas23333 授权 *FO83N8gjBEpRPLeXG3deyt4DiAdsSmWWk4LdGHQSUTF1w6jWWsdc* 
进行投票
```
cleos set account permission fibosas23333 vote '{"threshold":1,"keys":[{"key":"FO83N8gjBEpRPLeXG3deyt4DiAdsSmWWk4LdGHQSUTF1w6jWWsdc","weight":1}]}' "active" -p fibosas23333@active

cleos set action permission fibosas23333 eosio voteproducer vote
```
### 设置投票权限给账户
*fibosas23333* 授权 *fibosproxy55* 进行投票
```
cleos set account permission fibosas23333 vote '{"threshold":1,"accounts": [{"permission":{"account":"fibosproxy55","permission":"active"},"weight": 1}]}' "active" -p fibosas23333@active

cleos set action permission fibosas23333 eosio voteproducer vote
```
## 领取激励权限
### 设置领取激励权限给公钥
fibosas2333 授权 *FO83N8gjBEpRPLeXG3deyt4DiAdsSmWWk4LdGHQSUTF1w6jWWsdc* 
进行投票
```
cleos set account permission fibosas23333 claimer '{"threshold":1,"keys":[{"key":"FO83N8gjBEpRPLeXG3deyt4DiAdsSmWWk4LdGHQSUTF1w6jWWsdc","weight":1}]}' "active" -p fibosas2333@active

cleos set action permission your_name eosio claimbonus claimer
```
### 设置领取激励权限给账户
*fibosas2333* 授权 *fibosproxy55* 领取投票激励
```
cleos set account permission fibosas23333 claimer '{"threshold":1,"accounts": [{"permission":{"account":"fibosproxy55","permission":"active"},"weight": 1}]}' "active" -p fibosas23333@active

cleos set action permission fibosas23333 eosio claimbonus claimer
```
