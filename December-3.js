const data = [
    "gvNbShZZgQfWdQhdPQmggLTFLwmwjFqjVVgM", "CsJnHllcsnnnnJrGRnRwPPLVmFLHLBjFFVHmPT", "JlnCtctJnJDcJlDCRpPrSSQWfphzWZfbZSvfNfbS", "WjvRSdSQjvpjWzNlnZlNZqCCMzZZ", "nJtJsbctPBPwLNcDZNNGLClC", "tsFJHBgJwgJbnvSHHWVWHhVhpQ", "zRzPhCCSHVZzfGHZ", "qBsWBpqBwBcvqqWgdfZrprdggPHHVZ", "WWmvwvBbnWmnwvWcbmWWnqNCRSDRRSSjjSDbPJbRjClLhC", "rQrznfHHhrHzllzlzTGcJgtJ", "jhhjjSZVPWVZvSFtTttLTglgFtvm", "dqSCqVWdbDSSVqbVVSqhNdrnpnCnfsnnwfnsRpMpBMrf", "rTnvrSSHvHtnDQVDtfmW", "ZjCglhcCJschpZbZgbtGmRtbGmwtQtbmtN", "FFZCghFJhlslFpjcdFTPLHHmrqTMTdzBLHLH", "WzDfrDwwDCCDMnfDHHJjTHTtNdngdHtQ", "FmScGPPPPmpspchbGHtRsjdJJJWJWNttgH", "bvhFlVhPchPvqWLwqLWqvq", "RcchVlCCvmhDRjNJJJjbjllZlJ", "wPwFGFMPfpdtqbpwFFfGPQZTWTZjtzQWTBBQJzZjZZ", "fbwPqqMPwdgvmDVDhmRCgR", "SSQggtQVQQgQGmGVthVnWDGjCBLLzdDNCCjDGWCW", "RcHcHbFqbPMZRFTvHFFFlcZZBNBtNjjLLjDdjLjDqWCpNLpj", "sPPclZcsZtMPfVsnnwwVJhmQ", "jlrwpVPjMwfzZfhfwddH", "DbQBGgBJPPBBHfPZ", "ggGSQTnTgQGbSRQRPrNlsjVjMrpmMLnrrW", "MzNNbMSrZNSSvGWWznwGQlTG", "ZCFCJHqJFjqTTqngPwPG", "LCJLJCCFtfjsJCMbZSMSbbcDdBfd", "LCdjljfJJBfLDCCdJqGqsGGtmBsWtbGmSS", "gpgchRcPgRRQNZcpNhgNPzzmGrmrGwtSSswqrSGbbTzt", "QgQvNppRPQcggZNccchvNZgCjlnsDLDflDdfjLfMDVsMLv", "jfSfTWfwTJffQQNwTCHnGGGgHbgqGFvF", "LmspctdsLDlBLPmFFgqbqFFbqlnSRS", "PSZZsctsDDtdBmzBLBSmpJjMzWwjVfwJVMrNfwrfzf", "zFZqbRNRHNHhqHFqzNnzzqDQVFMggMgDpmJMTgpVTQFJ", "SwLVsSWBfStDGMfDTDGGGT", "vlCBVsSvCRrHRjCqrn", "ndGVddlVdrcGlGcljdVGjCgfffPCCLfCMvqWvPnqgn", "FNtRZBDDSNSNStDhFRNQtLgCMTCBqvLMMTfJqBLPLP", "bwQwZhSDFhZbFSNccwzwHmHHjHMwsd", "BrSDgqrgWzWDwJBzMDWBLjpmVLFfFPLVJjVVPLFV", "cNnRlvNRvQTcnZwmfQGPmfVFPP", "dsCNllvTdnntTlTsHcdCRtNRBDWBDWDrWBhDBqMBDqbzWwCr", "stLcchcTwRcsVTtftVVthchqmmCCFvWmmgSgQFCwGvWSFCrr", "PljDbZbzjllHdQNWHMFGrMMHMFrmmM", "njjjzbPdqRcRQQns", "BTBLwzmqWNbpzqNzLppLBnhZJcJSHThhnnJZHHSQnr", "RfQgDjgsjVfRFDdvddtvhhhJCnrSnMZCcMSCSJ", "QRtjtRQQlzlqqzzzBW", "FnzllplJMntnzptLFzsjTVSQcSjSjQFFmdQQ", "wgwrBrwGHPGBqHrDcpmjddSQTmTGVmmG", "DBhhNBrCrMvNvzptpN", "LgSbLLRJQSzLCgJRJhWCCzRBdZdcMfcHsMdFFjfPjsCHBc", "nrVTnmrrrlnGGmrlVwVZPFHmdsZHBmjMcdjfcZ", "wrnTlNpvVVrqFrtnwGqwwrTpSgSQQLbQRzQSQRJbQpDbQz", "pgvmcpVcpwJppwgwvMWfHbRGRHDBJbWGfGGb", "hQqFqQNhqdCPNhTQCCFbbjmBHBbBRjGHBDBGFj", "TtdCCNlPCmssnqgvzzvvtVrgzzrc", "JltddTSgtLLvgvdldgvWPZPPSjWMjCfWNjNWPG", "FrwpbwhbmfjGRpGPNM", "cmBrBcBnmFBQqcFbscBhQfttznJgzlLLDlnglzLLlg", "mDhRsDzWZzGhhhWpZwzwGdfbFsfFTQTLcNFfFrNvvcbT", "ngMHjjgVgqHnPlnqtnClMHbfCJFbcLFFJFLbrQNbFQcQ", "SlqHqVVqPnBHSHHljlMndBdZQphRhdGpzWmWWwBh", "hVNhcfbSSNMfjjMlqRCqpdzpRJdnhl", "sBHPPwQwttBBssLCHzDBlDDmRmpJdqJJJd", "sHHwtsHTWwtZPHtZbbVSgMbGCNjNvN", "SgMtSMVChFBHBFdCwhdqPcPsbRVQqsblDbRmlc", "jlrLWfvWvzWWzmcQcqcNbmNDjR", "JpLznrnfGrrfnWWzTpfvzvdHHCgSBwdlTMhCTMFhBBwg", "fptnFPLsttddDdRhQShQzC", "BqGHGlqmmGmlJmNmqlbbCzSCQHDzSjHhfSShjfVh", "fbrrMqGGBlNMGNqrqglmrLZwFcwgFwsPcscctpWLgn", "TCMMTtWBqCMMMWWMSWhNFhlNBNlNHwNDsvhw", "frfdrbZJrVLdZLbnJcrmvhlhHshlgsZsHwwghZ", "fLRVvcvRVpfbcfVVJTqpWCCSqCCTTtjjPj", "vRCGzdTtvdBCTzCdmVsQjnVttngthgnQHs", "rLNZlrwrjrFLMsggsQpsQngqMq", "NfjZWcbffDrLZfNLbDczvmcTvvGCmCBBmSdP", "DSqdzrHgJtSHMgvmnNGdcmCnvssN", "ZwQLlVlRVVWZFZhbJZVjRJscvBGcpssLpBcnGpBsmpBs", "TwwjjQJTjlhwMfTDgMrfgtqg", "HhvVhgddvdvqTqVqHQgjgmCPWGrcWsGWPcvlsWrWmC", "lbJBBFbMlJFRCmsRmRPtCtwm", "FMLLpDLnFpFJbDfLnZZSzhqHVdVQjgSdlQTZ", "mvBrszzsrrrGsBDvBvszDRQDhjCwWdLhJdCjjWZdqqdZdW", "gMlfFVccTGMGPMSCdcLLdqhjLJWWdZ", "VfggggPVltVSlSlHfgFtTpfRGmRrrrvQpQsrGmnvnQbzmz", "HjtMgWbHBtbtcggVcHwMwcdzpZFGzGZFpvFFZZWnnpFG", "RNNrfmSrSSzdGBzFfJFq", "mNsSrrTPPRshmsBClRClPmSccVgQVHjHwtHwTMbTVwMHgg", "pZmmLpQLDJBCPCssJTsCTc", "SwlLwWvSwNSSSMSMfWLvvVdPFzjfTscdjcCsjzCPddFc", "vbVMqGbLSVMhDQnRRQnBqH", "lNmNwlmlbhhfFNgpJLnHfTHfTdnTML", "BGvCwVGVPSDWDMMJTHZMpndH", "rVcBrPSPCwWqPwGCBCSrqlNNQFhsQhtlhhhgNQtb", "HqZCQRQgWjpmZHRHqQjttGGJQNQtwQGGGbGrJz", "SlddfFVMLncbJJMzMzzMwD", "ndSznsdVHsqgpZvH", "sNStMtNtDztrvrRGPRRRRrNzqcchgJJLqnBScBcJThJggJBT", "QCWWZbCbCVjVbFVFbVwbnhqLqhghBLwwTqJJcpgTBL", "ZlHjfHHFWFjCdbHlQFnfdnZFMzPzrrlMrtrrGRMsDPrGvGPz", "NnDHhNNldhNTdHllpptCRtftzmGBGmVRVGRH", "wgZgZJLBwqgLSWrBvZVVzmffWzRmGsGmmssm", "bgqPBBLbPbrrZBjjlpjccjDdDchFTNlc", "WRWNNRWNfLZtsmtSWrtLmWgTcMcPrpMTcVMMPPBBqjcg", "QJJDFbpnpJdlcwcgBTqlgPwc", "GJFHJGhHnpWWShpsRS", "DHDZvDQWdHJMHlJf", "RhhnGLnBtGrnLjwwJTTMTdQccllSMQ", "rmFrrBGQLQFLjbFnBhQLhrRGCPVDWzgmpsWvWWDzppWpzCvC", "bsrJrWgWJvQRqbbRDNGGZDlwNfNfwS", "ttCHThhhcBVpTBcdhdpfNGDSQLwDLfDGfQllCG", "jFjzcFhzQTTjHFvJsrPPnnFgPb", "SZggDgNLGCQzSgRsljscPvPPbHsBNc", "TtFfTpMthzhFFTpdMMJPfjPPWjBbHbjPlPPBjj", "dpdttMMTJttzMFhqFwGLgGRSrrQGSZrwRrDQ", "JsJntWmghjgJTpfgFCczlztzrDZDtDzC", "QddBBdBSPPPHBSVHVHvNdPVRClvlcclCDLCLFRFrrDLcZc", "NVwBVSNlSBNHngnngsJWhwWh", "hQVWJGWJlJQDGJHQWHpVWJVHmfPGPcjfdLdLSrcCmfjPjCPm", "wgwnRwMvNvBvFZMngNvFZCjdSSfcbPLjCbcdCbSf", "wgnRvMMvjMsTwngTgnnDVDWJDplHWhlhQWlWDT", "WGswWFGsBFwHvjnbnnJjbG", "gLDrSrPpLfmmDqqbbJZsjvmvRv", "DTldTpTsDLgSsLpfPTslVdVVdNWVzcNwtWdWhzVt", "sttWrhWZsLVtJVZrWhgbCPQQbDNVCHglnnlN", "vvRRRMqpmTjwFqmfjFjmBMwNbCwQNgHgDnbNnHQHQCDg", "THpvmBGfzWGzSzzS", "nmZwwfPmNggwgPgNmdvPPhTRHTHBJTsvSP", "WDccMzVQzGWcrllLdsGTvTsJJBLTdL", "pWtzQrzDlrCpcQztlzCCCpCVFFFwtgmfbjmbqwZjZfmFwfdw", "bmMNNMVSRWBWCSmVRdMRmMnvZZscvvszGcnZClpcGsvZ", "gfLfDDtDgjgDtWTjFQjHsvvpZqqplfvvcllcnnvG", "TFPjDtWPNPwBBBNB", "QcTCHcTwdpQgcWzWwvMPRzSGwW", "sDNjfhVmnlVffmLNfLbMPPDbqGtMSRWtDMtP", "fZjJJshhhLNnrCJScHSccTQQ", "qfhBhLLjvMqWWBWjsQGrdrGzpszpGrqd", "JTSDHFtlTDbHTcFcDbTHzmrNRdRRbNzrmRRnRpnQ", "PHcltTgJDlplgptScCfCgWMVfvfZvhMMBV", "rttDPglHZZDDDPHgZtgWBswdsTfpfdplLqfsFfFdfd", "cRVvpcmpmRSCGGCcMQmQFqNNqdVdqTbLwNbdFfFs", "zhGjRhSvcMtnrpZjHZBg", "STNrrzVdTJwsBggwFgBN", "WbtMWJJpwpDsLBfP", "cbvncCCmWtCGMcZHVVSlJVQrzvzVqQ", "MtPVBHVbBBTwbvWgRgvF", "LhZjZpnnMRwWfhSh", "LQcQCLCCCcnmnqZpcrpnrjQlsBMHddtMGGzrJHPPsHsNPPJz", "NbZtmZDmNNDBHBhDNtNGcvpmgLmmFrvprgrFGv", "djMjffMdqnVVTdMfTPnQSFScFFVSLLFrvccvcllL", "PPdPwMQwTMWDwBDZLHZN", "DqpJFdhtmdSwpqSncljHsnfjqlbzlc", "rQVZLGMWPCNrCGMwNVMcbzsVgfHHgfncfscssH", "NBCrPLwMTrrMBLQLwCFhpFBDFdFFtdvDFvpD", "QRwGBdGwqRTBMWRMMzBqQHHhngspPFFbHbzgbhZLLP", "rCNmDjvrCFpvLZsgPb", "lDrmpcfCtVDtCjlfNfQQqVdJBQWRVVRMMMJQ", "zcgjlRcJCFtlnTvppn", "BLSHDMVPVPHVHwFwMhTvgnFZMh", "DsLSDdmPVNVdGgrzCCdbjc", "tjjRbNQtvJVVsvqsvdTsGqBp", "wlFLPZPzzzrzwZPmZfZPlrmpLDCpWDWCSTCpppDDBssdWG", "rwwcFFghFmgTcNRJNnnNJtHV", "RLhbzMhccqLzdjghdFddNWPN", "DmsTZfvrfJLPPWwrdFgw", "LsmDtQDfLLGbGQbSzcpM", "qwhmmHlHmlwChcCWlpPCBzjPVdBzLsdLBVsT", "DnJDMqRDsPsjRVQR", "tSGSnNNSbrJJGfDSSfbchpvptFwmpcvlHqZlcF", "rdQdBRPrQBBnfdBbzLLgLgmbzSLCPW", "TcRTcFDTcjvswMWzzgLSzwwSLJbL", "MNTRMNGTsFMMqqqcMDTTnfpBhQhNpHZBZHBfrptQ", "ZZFwcQGwRGLTGLTl", "rJtMrqBVvhBCnlCn", "WWWMttbqqzfPWqWJVzmDQwFQlwZwjQfjgFcZ", "RhgmdBbLLmRvhGZwhZZJDwGq", "ldPpTtTPtVPpfTGzJQFGFqJsFG", "MPpCnrlCVfPtrPVtntllnbdHSbnBvvgdgHgnWvSv", "nbnfjQbQZBqBvjQdVFGHhsQhsFsFzGpD", "RSJSTTcCVTTMlSNcSTRRwTccpwDFDDzFhHhtwppssFGGpsDp", "clcTNJlLMgrcgRvBjfWVfWfBrrZn", "LHQdpQLQDRcDBQccVQpnNRhllzMtRqzRztTNnt", "mrvZPZvZvZbPSFJrSrggFvrJzbhlzttTlNtqtsMtTntntdqq", "GPfJPJwfZFrmFvrPmgHHQLQWdHQBwWWCHVVC", "TvTTLfflhZmwZLvtJmhdFhMpnWrpnbJcWMnpHzMrzbcn", "VqRRNGCBjRmqPGqDzbHMcMccWnzngHnP", "jNqNBjsDsDRCNVsmBRNQNRSSSddhZvLhddZhvhwvLTZwhSfT", "vjpJvpgpNwjDWvvJLhFLLhNRTmPTRPRF", "HHbHVrMHMmqzHlGmtGqMtdLCLQthQQPCSPTSFLLPRT", "bZZzbHszMrqzGmrHMBzbHbqJjffcDgwWjDJpnjjcscwgnw", "fBHDMNhhHMrBDBrfQqfwwvvLvfjLZZ", "lmppmGJgPPpddJVdnwsQjLttqtjZTpcsvT", "RndRmlGWJgdRnWQJQgWdQPlFFbhhbFbHbHMhhBbRDRFrrS", "tVhwlMdMWlhlZMZMlzWrtRpBNpLPpmnmCPQBLppPPPBz", "GvGTsgjcTLRQHmTQ", "gGRGbfbgbcSbbcRggvfcwlZVhVMfltddVtrlZdhW", "PwjPHwWssqrHqCqprpCPjwrrQnnDbdnQnGQHnbZbGQZbBQdD", "WvNtLhfLndnBNbJJ", "fvhvvWfTmtzTmjpsVVqsPzMjjq", "GjHMMTMfZbnqHnJNCN", "rlpQpthdlQbnlJqRzqVL", "spphwcpBvcvdvFTqPDFfwwPZTG", "mQfqmtpfBHJCHdlMDB", "cbbPPsZqjqcSvVsCrDllsrdzrzzD", "TSbVTvShqnVjPTPbggSPbNFQWGtfNLtFfWgGmGgGWR", "HJtwgJJwJrcjRRjRnwhVdrVbmGhPmNNrGhdV", "fWFvTDssTDMCBCWsvszWWMCQhZhLLNvNNbhVGGZdRZRdmhmd", "zCTBzWzDDCDCfFCRqCJHcJJctjJSgHpqHqJg", "dgnwgbcwVGbgDWnQbjdgDnBRBBNNqRLBNMLFRMRlqNsc", "fTZHmTmzJMmSSCZChZvZTHRlBNBFqtqftlqssqNqftts", "JTHJvhzCHpmPCSSTzPpPzJHgQVdQQjQdQwjgdpgdDMGgQM", "qPGmWLJWBRRdvqvvNq", "TnZHsTZsZsZZbDtbrNrdnDft", "SShhQQZCHQCSTVlllVVQCjQWNJGFWpWgFpmmVmNgLgFpGw", "TsSmttWMVstNfbMfBcpnFchFwFwZNrrwFp", "DWWCGlHWdhddwpcrjh", "gQvPqglRCHCHCPCPCJbbtSVVWtTVVJvTbs", "ddHSZQHDStZStLtsdDpbCbBPcjGGCqCMBGdNPb", "hWhvmglVznzglgzvzfznwfnfscswPjbMBMjNGBMPGMcjcPwP", "sJWsJfVflWsnhrltrZLFDDRRFTSSLT", "qqCqLNjnPPLZPjqnDjLNgnNrcGwtgddGrhprBJhhJtBGJG", "lTMDsDHmlRRbQQbVfMHFmMBJhwcTddrcpBBGdGGJcJdB", "lHFfQFssFFFMQRVWQVlssLnDSLLPvZZPqWCLWSqjvS", "pJPZRpQtpPQpGPqWbqlWTdLVLJbT", "nnnjCwgrgcCFBfnggBCsMTVbVsWVWdCTTdbb", "cfhcnwnrcggrncrwcjBDcGHmNPRRGRZZQRRdDZzmzH", "NqTrrzLpTNdLLJBBcBGGZGpFHB", "sWbgfHSfSgVgZcmGtStZwBFG", "VjQjjPjhbbfsCbbDQCgsDrRhzMdlNzHTRdRhqdNTrq", "GlqfPdvdBqPgfqDgFMsMVDppbsNJNpMs", "WnmmWCTCjZnmzRjTZRRnFBMNpbZZpFJMSFSNFSbS", "TRRrnLBmzjttRRCmTRjjwLlvdhQvdrhqqlGdPqGggPlQ", "McjMPgPgGPHJWjhPNgPqQbpQSfqffnWVnnnpnZ", "BwwDmBTLRBBLzBTBTvtVqlfpqfbQqpqZbnQFlt", "rDsDBsmvRTBRzCTZsTmCsCrLPgNcPHNhPccNHHrjMNrgdNdP", "GqmLFDrcglvQGZwwzj", "nlHbSNBhhslJfsBfvdZHdCvRzdCzppzR", "JWShMfWMMthSJBBthJsgtcTTcFqcTrmTLrrTlr", "CsBsShBWsBWhvFJWCSsJpbTZdTbdBRgHffRlHHHBgH", "tqmnwwwDmVwfzZblzTRqzQ", "DGtDjGMcntMGnnGhhjJJJsCpFRRSJJ", "GQVVcGgFGcSFvfcFfJVnQmdbTwMLwTTnbnQMws", "ZqZrDWDtNPPHRNPzGCdndLLMLwMWhwbmLddn", "DRqRHCHlCtDrqtNqDplfpvGFjVjvBSFFcj", "zfSfdGPdMVHHdcMThhpwqqrwrqJhcF", "vlDNTWDDWWnngNQZtgwLrJZqLFZLFJpFJjJJ", "NCtWmnvBmDnWQVTmTGSRmmRTPz", "LLvppVLDsppGMGCLCCwNmJMNrNHrNmNNmHFjrh", "lZZfvfgRPZQWNNmlWlFNHl", "nnRtndRbcPttvTpswLTs", "trtzWfszNPlhPlgrWglhZjSLDBvTfSDTmSvmLvfS", "QMdVVGBQMTJDvSjdHJ", "nBppGVVnQQgzgPsPzzhp", "fVQzVrQVtVzHwjtMTjcTCjFgcDCGCd", "JslDPWLbLbZlJBMgBTBPdcFTFd", "JNJmZsDLnLDWmsVqSrHqnHqQwQSq", "mLMZRMRmZLmHLLjNshrrJjRsNNsj", "PnqnBVBPcpWrWfWzDhDsHW", "qpBQgcQncqpBcVgtclHqcSMTLZZQvLLZdLdwCmLMSd", "PZgMwZMjPgBCWgZFgmBGSTtwcccztTzbnGDcNT", "vJLlvvlfdsVVslVHrrpLfRlDcSScmbSnnRGDnbDTSbSSDt", "fvVHdLfLQljmmqqMQPhQ", "DZRstNGrDWGRMlzLHLMpNSpp", "bPgCrCvgnrCPgwplbMSjfHzHfj", "CgnFnBVrFFVmdVggmPPVTTcZBGhRqGtcZqqJhGRGssWs", "WrrCGrDlWhBBZtHB", "ggdcnQpcPRSpzfvJBTfPJvtP", "gSNnSBFnSMBNjpMssDmCrrGmCLqq", "szZGZGGwNdVtpwvbzptzVBQQLFclTJQFlHJNcFBRRJ", "CTrqSfWThWDjJCcLQRRRFLlQ", "rggqfMqPWnDqnVbZvTtPZpssVw", "GJHqPPcJnhthNHnL", "rzzlVDVTQDzSSdsSlzpBspssLhmZNjhZWjjffWBLZhgBmnjt", "TSTQTsnTbDsMvCGwcFvbJR", "PPjtzdnCnSjSthPjWJgJWjgMNBsNrT", "bZHfLLhvhpbfvLhHfQbqpNJTWWNsqNTrTNrgWN", "ZFbZZFvlRvZwhQwLDSdGnmCGmnlmdznD", "RFRRhzzsRsszRlhbrhgBcbTfHgBT", "pJtNmSgwZNtSJLgSqHcbBDDTHPfrSqTc", "ZNWdpNCJtLZpQJLLpmLtZNFGjVgFnsngRGllVsjjCnvs", "sJVRJmmmwwlmzcszMzjRjJVzspCZBsZTTFpTTZvSZTFBFbtZ", "GhNDgNWnGGqDvFSCZvbtFpvg", "fWrCNNffGnhWdrPhWjwjzRlJmcjRcPzlmV", "FdncmqmgcZztLWFvFFvjWLlT", "RsMMJVpfhJVsDVMfJpvlTWTvhjQSQvCbLCSC", "jDBjRrsVfNJgzdZrZwtmZt", "THDDQLZTGQQLQDSSTBCZSZHfFrvvlVRRlPVFfVrvqnvnnH", "VbWWcgbNpjgPrRvrNfqnzv", "swggwpJWwsWscJsDSLTJTmSVZJTBDZ", "wGsznPGGBHdzHhtHDD", "WMVSWqVmrSBMpvWVMFtdClhDtqDDHhdtQt", "RgWVRcmgnPPnjJBg", "BmfPBHBFswLLjQQnLCnzzW", "SRdvvRSGrdlRSvTgRrMVCjVWCZzMnVZhWzTj", "vlSRJrRJvbGGrSSJgWvlScptFmwbmfHHBfsNFmBbfsFm"
];

// Lowercase item types a through z have priorities 1 through 26.
// Uppercase item types A through Z have priorities 27 through 52.

const letterScoreDictionary = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
    A: 27,
    B: 28,
    C: 29,
    D: 30,
    E: 31,
    F: 32,
    G: 33,
    H: 34,
    I: 35,
    J: 36,
    K: 37,
    L: 38,
    M: 39,
    N: 40,
    O: 41,
    P: 42,
    Q: 43,
    R: 44,
    S: 45,
    T: 46,
    U: 47,
    V: 48,
    W: 49,
    X: 50,
    Y: 51,
    Z: 52
};

const commonLetterScore = data.map((rucksack) => {
    const half = (rucksack.length/2)
    const firstHalf = rucksack.slice("", half);
    const secondHalf = rucksack.slice(half);

    for (let i = 0; i < firstHalf.length; i++) {
        for (let j = 0; j < secondHalf.length; j++) {
                if (firstHalf[i] === secondHalf[j]) {
                    return letterScoreDictionary[firstHalf[i]];
                } else continue
        }
    }
})

const initialValue = 0;
const totalScore = commonLetterScore.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)

// console.log({totalScore})

// part two
// within each group of three Elves, the badge is the only item type carried by all three Elves. That is, if a group's badge is item type B, then all three Elves will have item type B somewhere in their rucksack, and at most two of the Elves will be carrying any other item type.
// The only way to tell which item type is the right one is by finding the one item type that is common between all three Elves in each group.

const elfGroups = [];
const elfGroupSize = 3;
    for (let i = 0; i < data.length; i += elfGroupSize) {
        elfGroups.push(data.slice(i, i + elfGroupSize));
}

const badges = elfGroups.map((group) => {
    for(let i = 0; i < group[0].length; i++){
        if((group[1].includes(group[0][i])) && (group[2].includes(group[0][i]))){
            return letterScoreDictionary[group[0][i]]
        }
        continue
    }
});

const totalBadgeScore = badges.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)

console.log(totalBadgeScore)
